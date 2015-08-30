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
		$this->assign('list', $list);
		$this->assign('user_info', $user_info);
		$this->display('User/address_index');
	}
	
	public function edit()
	{
		if(IS_POST) {
			
			$model = D('UserAddress');
			
			//print_r($_POST);
			
			if($model->create()) {
				
				$act = I('post.act', '', 'htmlspecialchars');
				$first_name = I('post.first_name', '', 'htmlspecialchars');
				$last_name = I('post.last_name', '', 'htmlspecialchars');
				
				if(empty($first_name)) {
					$this->error('Please enter First Name.');
				}
				if(empty($first_name)) {
					$this->error('Please enter Last Name.');
				}
				
				$data['consignee'] = $first_name."\n".$last_name;
				$data['email'] = $model->email;
				$data['country'] = $model->country;
				$data['province'] = $model->province;
				$data['city'] = $model->city;
				$data['address'] = $model->address;
				$data['zipcode'] = $model->zipcode;
				$data['mobile'] = $model->mobile;
				$data['user_id'] = session('user_id');

				if($act == 'edit' && !empty($model->address_id)) {
					if($model->where("address_id='{$model->address_id}'")->save($data)) {
						$this->success('Your address change is successful.');
					}
				}elseif($act && empty($model->address_id)) {
					if($model->add($data)) {
						$this->success('Your address change is successful.');
					}
				}
				$this->error('Your address change is failure.');

			} else {
				$this->error($model->getError());
			}
		}
	}
	
	public function del()
	{
		$address_id = I('get.id', 0, 'intval');
		
		if(empty($address_id)) {
			$this->error('Your address delete failure.');
		}
		$user_id = session('user_id');
		
		$model = D('UserAddress');
		
		if($model->where("address_id='$address_id' and user_id='$user_id'")->delete()) {
			$this->success('Your address delete successful.');
		}else {
			$this->error('Your address delete failure.');
		}
		
		
	}
	
	
}