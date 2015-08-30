<?php 

namespace Home\Controller;

use Think\Controller;

class CartController extends Controller {
	
	
	public function index()
	{
		$model = D('Cart');
		
		$user_id = session('user_id');
		
		$user_info = D('Users')->getUserInfo($user_id, 'email');
		
		$list = $model->get_cart_goods();
		
		//dump($list);

		$this->assign('list', $list);
		$this->assign('user_info', $user_info);
		$this->display('User/cart_index');
	}
	
	
}