<?php 

namespace Home\Controller;


class AddressController extends AdminController {
	
	
	public function index()
	{
		$user_id = session('user_id');
		
		$user_info = D('Users')->getUserInfo($user_id, 'email');
		
		
		$model = D('UserAddress');
		$list = $model->getAddress($user_id);
		if($list) {
			foreach($list as $k=>$val) {
				list($list[$k]['first_name'], $list[$k]['last_name']) = explode("\n", $val['consignee']);
			
				if(empty($val['email'])) {
					$list[$k]['email'] = $user_info['email'];
				}
			}
		}
		
		
		
		
		
		
		
		//dump($user);
		
		$this->assign('list', $list);
		$this->assign('user_info', $user_info);
		$this->display('User/address_index');
	}
	
	public function add()
	{
		
		
		
		
		$this->display('User/address_add');
	}
	
	
}