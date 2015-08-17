<?php 

namespace Home\Controller; 

use Think\Controller;

class CategoryController extends Controller {
	
	private $pagesize = 20;
	
	protected function _initialize() 
	{
		header('Content-Type:text/html; charset="utf-8"');
	}
	
	public function index()
	{
		$cat_id = I('get.cid', 0, 'intval');
		$p = I('get.p', 1, 'intval');
		
		//if(empty($cat_id)) $this->redirect('/');
		
		$attrModel = D('Attribute');
		$goodsModel = D('Goods');
		$commentModel = D('Comment');
		
		$argv['attr'] = $attrModel->get_attribute_tree();
		
		$where = "cat_id='$cat_id'";
		
		$argv['count'] = $goodsModel->where($where)->count();
		$Page = new \Think\Page($argv['count'], $this->pagesize);
		$argv['pages'] = $Page->show();

		$argv['list'] = $goodsModel->lists($where, $p, $this->pagesize);
		$argv['reviews_goods'] = $commentModel->getComment(0, 0, 3);

		$this->assign('argv', $argv);

		$this->display('home/category');
	}


}


