<?php

namespace Common\Model;

use Think\Model\RelationModel;


class OrderGoodsModel extends RelationModel {
	
	public function getOrderGoods($order_id)
	{
		if(empty($order_id)) {
			return false;
		}
		$field = 'a.*,b.goods_thumb,b.goods_img,b.original_img';
		$res = $this->field($field)->alias('a')->join('__GOODS__ b ON a.goods_id=b.goods_id')->where("a.order_id='{$order_id}'")->select();
		if($res) {
			foreach($res as $k=>$val) {
				
				$res[$k]['total_price'] = $val['goods_price'] * $val['goods_number'];
				$res[$k]['goods_thumb'] = C('IMG_HOST').'/'.$val['goods_thumb'];
				$res[$k]['goods_img'] = C('IMG_HOST').'/'.$val['goods_img'];
				$res[$k]['original_img'] = C('IMG_HOST').'/'.$val['original_img'];
				$res[$k]['url'] = build_uri('goods', array('gid'=>$val['goods_id']));
			}
			
		}
		return $res;
	}
	
	
}