<?php

namespace Common\Model;

use Think\Model\RelationModel;
use Think\Page;

class CommentModel extends RelationModel {
	
	protected $_link = array(
		'Goods' => array(
			'mapping_type' => self::BELONGS_TO,
			'class_name' => 'Goods', //对应的Model的类名
			'foreign_key' => 'id_value', //对应的外键ID,当前模型表外键
			'relation_foreign_key' => 'goods_id', //需要连接查询的表对应的外键ID
			'mapping_name' => 'goods_list', //返回结果中的键名
			'mapping_fields' => 'goods_id,goods_name,goods_sn,market_price,shop_price,goods_number,goods_thumb,goods_img,original_img', //要显示字段
		),
    );
	
	
	public function lists($where = '', $page = 1, $limit = 10, $order = 'add_time desc')
	{
		$condition = 'is_on_sale=1 AND is_delete=0';
		
		if($where) {
			$condition .= ' AND '.$where;	
		}
		
		$res = $this->field($field)->where($condition)->page($page, $limit)->order($order)->select();
		if($res) {
			foreach($res as $k=>$val) {
				$val['goods_thumb'] = C('IMG_HOST').'/'.$val['goods_thumb'];
				$val['goods_img'] = C('IMG_HOST').'/'.$val['goods_img'];
				$val['original_img'] = C('IMG_HOST').'/'.$val['original_img'];
				$val['sale_num'] = intval((1 - $val['shop_price']/$val['market_price'])*100);
				$val['url'] = build_uri('goods', array('gid'=>$val['goods_id']));
				$data[$val['goods_id']] = $val;
			}
			unset($res);
		}
		return isset($data)? $data: $res;
		
	}
	
	public function getComment($type = 0, $id_value = 0, $limit = 10, $order = 'comment_id desc')
	{
		$condition = "status=1 AND comment_type='$type'";
		
		if(is_numeric($id_value) && $id_value) {
			$condition .= "id_value=$id_value";
		}elseif(is_array($id_value) && $id_value) {
			$condition .= "id_value in(".implode(',', $id_value).")";
		}
		$res = $this->relation(true)->where($condition)->order($order)->limit($limit)->select();
		if($res) {
			foreach($res as $k=>$val) {
				$res[$k]['rank'] = rand(50, 100);
				$res[$k]['goods_list']['goods_thumb'] = C('IMG_HOST').'/'.$val['goods_list']['goods_thumb'];
				$res[$k]['goods_list']['goods_img'] = C('IMG_HOST').'/'.$val['goods_list']['goods_img'];
				$res[$k]['goods_list']['original_img'] = C('IMG_HOST').'/'.$val['goods_list']['original_img'];
				$res[$k]['reviews'] = $this->where("comment_type='$type' AND id_value='{$val['goods_list']['goods_id']}'")->count();
				$res[$k]['url'] = build_uri('goods', array('gid'=>$val['goods_list']['goods_id']));
			}
		}
		return $res;
	}
	
	
}

