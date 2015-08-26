<?php 

namespace Home\Controller;

use Think\Controller;

class OrderController extends AdminController {
	
	public function index()
	{
		$listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
		
		$order = D('OrderInfo');

		$where['user_id'] = session('user_id');
		
		
		$total = $order->where($where)->count();
		
		$Page = new \Think\Page($total, $listRows);
		$show = $Page->show(); 
		
		$list = $order->where($where)->order('add_time desc')->limit($Page->firstRow.','.$Page->listRows)->select();
		if($list) {
			foreach($list as $k=>$val) {
				$list[$k]['status'] = get_order_status($val['order_status'], $val['shipping_status'], $val['pay_status']);
			}
		}
		
		$this->assign('list', $list); 
		$this->assign('page', $show);
		
		$this->display('User/order_index');

	}
	
	public function delete()
	{
		$order_id = I('get.order_id', 0, 'intval');
		
		$order = D('OrderInfo');
		
		$info = $order->where("order_id={$order_id}")->find();
		if(empty($info) || empty($info['user_id'])) {
			$this->error('The order is nonexistent!');
		}
		
		$user_id = session('user_id');
		
		//如果用户ID大于0，检查订单是否属于该用户
		if($user_id>0 && $info['user_id'] != $user_id) {
			$this->error('You have no authorization to operate others\' order.');
		}
		
		//订单状态只能是“未确认”或“已确认”
		if($info['order_status'] != 0 && $info['order_status'] != 1) {
			$this->error('Current order status is not [Unconfirmed].');
		}
		
		//订单一旦确认，不允许用户取消
		if($info['order_status'] == 1) {
			$this->error('Please communicate with communicate with shopkeeper since current order has been confirmed and not canceled.');
		}
		
		//发货状态只能是“未发货”
		if($info['shipping_status'] != 0) {
			$this->error('You can cancel the order before shipping and communicate with shopkeeper.');
		}
		
		// 如果付款状态是“已付款”、“付款中”，不允许取消，要取消和商家联系
		if($info['pay_status'] != 0) {
			$this->error('You can\'t cancel the order until non-payment, if you want to cancel it please contact with shop owner.');
		}
		
		if($order->where("order_id = '$order_id'")->save(array('order_status'=>2))) {
			//记录log
			order_action($order_id, $info['order_sn'], 2, $info['shipping_status'], 0, 'Buyer cancel');
			
			//退货用户余额、积分、红包
			if($info['surplus'] >0) {
				$change_desc = sprintf("Cancel order %s,return advancedly payed balance for order", $info['order_sn']);
				log_account_change($info['user_id'], $info['surplus'], 0, 0, 0, $change_desc);
			}
			if($info['integral'] > 0) {
				$change_desc = sprintf("Cancel order %s,return points payed for order", $info['order_sn']);
				log_account_change($info['user_id'], 0, 0, 0, $info['integral'], $change_desc);
			}
			if($info['user_id'] > 0 && $info['bonus_id'] > 0) {
				change_user_bonus($info['bonus_id'], $info['order_id'], false);
			}
			
			//如果使用库存，且下订单时减库存，则增加库存
			//这里暂时空着-有时间在写
			
			//修改订单
			$data = array(
				'bonus_id'  => 0,
				'bonus'     => 0,
				'integral'  => 0,
				'integral_money'    => 0,
				'surplus'   => 0
			);
			$order->where("order_id = '$order_id'")->save($data);
			
			$this->success('Cancel the order successfully.', '/?s=/order/index');
			
		} else {
			$this->error('Order Cancel failed');
		}
		
	}
	
	
	public function detail()
	{
		$order_id = I('get.order_id', 0, 'intval');
		
		if(empty($order_id)) {
			$this->redirect('/?s=order/index');
		}
		$user_id = session('user_id');

		$order_info = D('OrderInfo')->where("order_id='{$order_id}' AND user_id='{$user_id}'")->find();
		if(empty($order_info)) {
			$this->redirect('/?s=order/index');
		}
		
		$order_info['order_addres'] = $order_info['consignee'] ;
		
		if($order_info['country'] && $country_name = getRegion($order_info['country'])) {
			$order_info['order_addres'] .= ', '.$country_name['region_name'];
		}
		if($order_info['province'] && $province_name = getRegion($order_info['province'])) {
			$order_info['order_addres'] .= ', '.$province_name['region_name'];
		}
		if($order_info['city'] && $city_name = getRegion($order_info['city'])) {
			$order_info['order_addres'] .= ', '.$city_name['region_name'];
		}
		if($order_info['district'] && $district_name = getRegion($order_info['district'])) {
			$order_info['order_addres'] .= ', '.$district_name['region_name'];
		}
		$order_info['order_addres'] .= ', '.$order_info['address'];
		
		$order_info['order_addres'] .= $order_info['mobile']? ', '.$order_info['mobile']: $order_info['tel'];
		
		
		$order_info['goods_list'] = D('OrderGoods')->getOrderGoods($order_id);

		$this->assign('info', $order_info); 
		$this->display('User/order_detail');
	}
	
	
	
}
	