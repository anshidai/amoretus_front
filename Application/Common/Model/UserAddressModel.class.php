<?php

namespace Common\Model;

use Think\Model;


class UserAddressModel extends Model {
	
	
	protected $_validate = array(
		
		array('first_name', 'require', 'Please enter First Name.'), //必填项
		array('last_name', 'require', 'Please enter Last Name.'), //必填项
		
		array('country', 'require', 'Please select a country of consignee.'), //必填项
		array('province', 'require', 'Please select a province of consignee.'), //必填项
		array('city', 'require', 'Please select a city of consignee.'), //必填项
		
		array('address', 'require', 'Please enter an address.'), //必填项
		
		array('email', 'require', 'Please enter a valid email address.'), //必填项
		array('email', 'email', 'Please enter a valid email address..'), //验证邮箱格式
		
		array('zipcode', '/^\d+/', 'Zip code should be numbers.', 0, 'regex'), //验证邮政编码格式
		array('mobile', '/^\d+/', 'Mobile No. is invalid.', 0, 'regex'), //验证手机号
		
	);
	
	
	public function getAddress($user_id, $field = '*', $limit = 0)
	{
		$user_id = intval($user_id);
		
		if(!empty($user_id)) {
			
			$query = $this->field($field)->where("user_id='{$user_id}'");
			if($limit) {
				$query->limit($limit);
			}
			$info = $query->select();
			return $limit? $info[0]: $info;
		}
		return false;
	}
	
	
	
}