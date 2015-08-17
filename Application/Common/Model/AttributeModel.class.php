<?php

namespace Common\Model;

use Think\Model;

class AttributeModel extends Model {
	
	public function get_attribute_tree($attr_id = 0)
	{
		$data = array();
		$res = $this->order('sort_order desc')->select();
		if($res) {
			foreach($res as $k=>$val) {
				if($val['attr_values']) {
					$attr_values = array();
					$val['attr_values'] = explode("\n", $val['attr_values']);
					foreach($val['attr_values'] as $k2=>$val2) {
						$attr_values[$k2]['attr_name'] = $val2;
						$attr_values[$k2]['attr_id'] = $val['attr_id'];
					}
					$val['attr_values'] = $attr_values;
					
				}
				$data[$val['attr_name']] = $val;
			}
		}
		unset($res);
		return $attr_id>0? $data[$attr_id]: $data;
	}

	
	
}



