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
		
		
		//dump($list);
		
		$this->assign('list', $list); 
		$this->assign('page', $show);
		
		$this->display('user/order_index');

		
	}
	
	
}
	