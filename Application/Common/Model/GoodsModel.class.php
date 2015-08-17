<?php

namespace Common\Model;

use Think\Model\RelationModel;
use Think\Page;

class GoodsModel extends RelationModel {
	

	
	public function lists($where = '', $page = 1, $limit = 10, $order = 'add_time desc')
	{
		$condition = 'is_on_sale=1 AND is_delete=0';
		
		if($where) {
			$condition .= ' AND '.$where;	
		}
		$field = 'goods_id,cat_id,goods_sn,goods_name,brand_id,goods_number,market_price,shop_price,goods_thumb,goods_img,original_img';
		$res = $this->field($field)->where($condition)->page($page, $limit)->order($order)->select();
		if($res) {
			foreach($res as $k=>$val) {
				$val['goods_thumb'] = C('IMG_HOST').'/'.$val['goods_thumb'];
				$val['goods_img'] = C('IMG_HOST').'/'.$val['goods_img'];
				$val['original_img'] = C('IMG_HOST').'/'.$val['original_img'];
				$val['sale_num'] = intval((1 - $val['shop_price']/$val['market_price'])*100);
				$data[$val['goods_id']] = $val;
			}
			unset($res);
		}
		return isset($data)? $data: $res;
		
	}
	
	public function getGoods($goods_id, $field = '*')
	{
		if(is_numeric($goods_id)) {
			$goods_ids = $goods_id;
		}else if(is_array($goods_id)) {
			$goods_ids = implode(',', $goods_id);
		}
		return $this->field($field)->where("goods_id in({$goods_ids})")->order('add_time desc')->select();
	}
	
	public function getGoodsInfo($goods_id, $field = '*')
	{
		return $this->field($field)->where("goods_id ='$goods_id'")->find();
		
	}
	
	
	
	
}

