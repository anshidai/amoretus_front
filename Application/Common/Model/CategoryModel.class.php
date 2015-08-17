<?php

namespace Common\Model;

use Think\Model;

class CategoryModel extends Model {
	
	/**
	 * 获得指定分类同级的所有分类以及该分类下的子分类
	 *
	 * @access  public
	 * @param   integer     $cat_id     分类编号
	 * @return  array
	 */
	public function get_categories_tree($cat_id = 0)
	{
		if ($cat_id > 0) {
			$parent_id = $this->where("cat_id = '$cat_id'")->field('parent_id')->find();
		} else {
			$parent_id = 0;
		}
		
		/*
		 判断当前分类中全是是否是底级分类，
		 如果是取出底级分类上级分类，
		 如果不是取当前分类及其下的子分类
		*/
		$count = $this->where("parent_id = '$parent_id' AND is_show = 1 ")->count();
		if($count || $parent_id == 0) {
			/* 获取当前分类及其子分类 */
			$res = $this->where("parent_id = '$parent_id' AND is_show = 1")->field('cat_id,cat_name ,parent_id,is_show')->order('sort_order ASC, cat_id ASC')->select();
			
			if($res) {
				foreach($res as $row) {
					if ($row['is_show']) {
						$cat_arr[$row['cat_id']]['id']   = $row['cat_id'];
						$cat_arr[$row['cat_id']]['name'] = $row['cat_name'];
						$cat_arr[$row['cat_id']]['url']  = build_uri('category', array('cid' => $row['cat_id']), $row['cat_name']);

						if(isset($row['cat_id'])) {
							$cat_arr[$row['cat_id']]['childs'] = $this->get_child_tree($row['cat_id']);
						}
					}
				}
			}
		}
		return isset($cat_arr)? $cat_arr: '';
	}
	
	public function get_child_tree($tree_id = 0)
	{
		$three_arr = array();
		
		$count = $this->where("parent_id = '$tree_id' AND is_show = 1 ")->count();
		if($count || $tree_id == 0) {
			$res = $this->where("parent_id = '$tree_id' AND is_show = 1")->field('cat_id, cat_name, parent_id, is_show')->order('sort_order ASC, cat_id ASC')->select();
			if($res) {
				foreach($res as $row) {
					if($row['is_show']) {
						$three_arr[$row['cat_id']]['id']   = $row['cat_id'];
						$three_arr[$row['cat_id']]['name'] = $row['cat_name'];
						$three_arr[$row['cat_id']]['url']  = build_uri('category', array('cid' => $row['cat_id']), $row['cat_name']);

						if(!isset($row['cat_id'])) {
						$three_arr[$row['cat_id']]['childs'] = $this->get_child_tree($row['cat_id']);
						}
					}
				}
			}
		}
		return $three_arr;
	}

	
	
	
}



