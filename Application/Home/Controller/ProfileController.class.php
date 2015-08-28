<?php 

namespace Home\Controller;

use Think\Controller;

class ProfileController extends AdminController {
	
	
	
	public function resetpwd()
	{
		$user_id = session('user_id');
		
		if(IS_POST) {
			
			$old_pwd = I('post.old_password', '', 'htmlspecialchars');
			$new_pwd = I('post.new_password', '', 'htmlspecialchars');
			$comfirm_pwd = I('post.comfirm_password', '', 'htmlspecialchars');
			
			if(empty($old_pwd)) {
				$this->error('Please enter your current password.');
			}
			if(empty($new_pwd)) {
				$this->error('Please enter the new password.');
			}
			if(strlen($new_pwd)<6 || strlen($new_pwd)>20) {
				$this->error('Password length of 6 to 20 characters.');
			}
			if($new_pwd != $comfirm_pwd) {
				$this->error('The two passwords you entered did not match. Please type it again.');
			}

			$userModel = D('Users');
			$info = $userModel->where("user_id='$user_id'")->find();
			
			if(empty($info)) {
				$this->error('Your password change is failure.');
			}
			
			if($info['password'] != md5(md5($old_pwd).$info['ec_salt'])) {
				$this->error('Current password error.');
			}
			
			$userModel->ec_salt = rand(1, 9999);
			$userModel->password = md5(md5($new_pwd). $userModel->ec_salt);
			
			if($userModel->where("user_id='$user_id'")->save() !== false) {
				$this->success('Your password change is successful.');
			}else {
				$this->error('Your password change is failure.');
			}

		}
		else {
			$this->display('User/resetpwd');

		}
	}
	
	
}


