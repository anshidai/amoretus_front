<?php 

namespace Home\Controller; 

use Think\Controller;

class GoodsController extends Controller {
	
	protected function _initialize() 
	{
		header('Content-Type:text/html; charset="utf-8"');
	}
	
	public function view()
	{
		$goods_id = I('get.gid', 0, 'intval');
		
		$goodsModel = D('Goods');
		$argv['info'] = $goodsModel->getGoodsInfo($goods_id);
		
		if(empty($argv['info'])) die('Didn\'t find the related data');
		
		$goodsAttrModel = D('GoodsAttr');
		$goodsGalleryModel = D('GoodsGallery');
		$categoryModel = D('Category');
		
		$argv['album'] = $goodsGalleryModel->getAlbum($goods_id);
		
		$argv['category'] = $categoryModel->where("cat_id='{$argv['info']['cat_id']}'")->find();
		$argv['category']['url'] = build_uri('category', array('cid'=>$argv['category']['cat_id']), $argv['category']['cat_name']);
		
		$argv['attr'] = $goodsAttrModel->getAttr($goods_id);
		
		
		//dump($argv['attr']);
		
		$commentModel = D('Comment');
		
		
		$argv['site_url'] = C('SITE_URL');
		$this->assign('argv', $argv);

		$this->display('Home/goods_view');
	}
	
	public function size_show()
	{
		$this->display('Common/size_guide_layer');
	}


}


