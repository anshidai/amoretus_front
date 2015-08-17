<?php

namespace Common\Model;

use Think\Model\RelationModel;

class GoodsAttrModel extends RelationModel {
	
	protected $_link = array(
		'goods' => array(
			'mapping_type' => self::BELONGS_TO,
			'class_name' => 'Goods', //对应的Model的类名
			'foreign_key' => 'goods_id', //对应的外键ID
			'relation_foreign_key' => 'goods_id', //对应的外键ID
			'mapping_name' => 'goods_list', //返回结果中的键名
			'mapping_fields' => 'goods_id,goods_name,goods_sn,cat_id,brand_id,goods_thumb,goods_img,original_img,market_price,goods_price,goods_number', //要显示字段
		),

    );
	
	public function getAttrGoods($attr_id = '', $where = '', $order = 'goods_attr_id desc')
	{
		if(is_numeric($attr_id)) {
			$attr_ids = $attr_id;
		}else if(is_array($attr_id)) {
			$attr_ids = implode(',', $attr_id);
		}
		
		if(isset($goods_ids)) {
			$condition .= " AND attr_id IN($attr_id)";
		}
		if($where) {
			$condition .= ' AND '.$where;	
		}
		$res = $this->relation(true)->where($condition)->order($order)->select();
		if($res) {
			foreach($res as $k=>$val) {
				$data[$val['goods_id']] = $val;
			}
			unset($res);
		}
		return isset($data)? $data: '';
	}
	
	
}

