<?php

namespace Common\Model;

use Think\Model;


class UserAddressModel extends Model {
	
	
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