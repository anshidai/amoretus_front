<?php

namespace Home\Widget;

use Think\Controller;

/**
 * 分类widget
 * 用于动态调用分类信息
 */

class CommonWidget extends Controller{
		
	
	public function Menu()
	{
		$categories = D('Category')->get_categories_tree();
		
		$this->assign('categories', $categories);
		
		$this->display('common/category');
	}
}
