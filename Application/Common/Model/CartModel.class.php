<?php

namespace Common\Model;

use Think\Model;

class CartModel extends Model {


	/**
	 * 获得购物车中的商品
	 *
	 * @access  public
	 * @return  array
	 */
	function get_cart_goods()
	{
		 /* 初始化 */
		$goods_list = array();
		$total = array(
			'goods_price'  => 0, // 本店售价合计（有格式）
			'market_price' => 0, // 市场售价合计（有格式）
			'saving'       => 0, // 节省金额（有格式）
			'save_rate'    => 0, // 节省百分比
			'goods_amount' => 0, // 本店售价合计（无格式）
		);
		
		/* 用于统计购物车中实体商品和虚拟商品的个数 */
		$virtual_goods_count = 0;
		$real_goods_count    = 0;
		
		$session_id = '8564e2ab88a8256fe3abefcf772573f1';
		
		$res = $this->where("session_id='$session_id'")->order('goods_id')->select();
		if($res) {
			foreach($res as $k=>$val) {
				$total['goods_price']  += $val['goods_price'] * $val['goods_number'];
				$total['market_price'] += $val['market_price'] * $val['goods_number'];
				
				$val['subtotal']     = price_format($val['goods_price'] * $val['goods_number'], false);
				$val['goods_price']  = price_format($val['goods_price'], false);
				$val['market_price'] = price_format($val['market_price'], false);
				
				$val['url'] = build_uri('goods', array('gid'=>$val['goods_id']));
				
				/* 统计实体商品和虚拟商品的个数 */
				if ($val['is_real']) {
					$real_goods_count++;
				}
				else {
					$virtual_goods_count++;
				}
				
				//获取商品缩略图
				$goods_thumb = D('Goods')->getGoodsInfo($val['goods_id'], 'goods_thumb');
				$val['goods_thumb'] = C('IMG_HOST').'/'.$goods_thumb['goods_thumb'];
				
				$goods_list[$val['rec_id']] = $val;
			}
		}
		unset($res);
		
		$total['goods_amount'] = $total['goods_price'];
		$total['saving']       = price_format($total['market_price'] - $total['goods_price'], false);
		if($total['market_price'] > 0) {
			$total['save_rate'] = $total['market_price'] ? round(($total['market_price'] - $total['goods_price']) * 100 / $total['market_price']).'%' : 0;
		}
		$total['goods_price']  = price_format($total['goods_price'], false);
		$total['market_price'] = price_format($total['market_price'], false);
		$total['real_goods_count']    = $real_goods_count;
		$total['virtual_goods_count'] = $virtual_goods_count;
		
		return array('goods_list' => $goods_list, 'total' => $total);
	}



}