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
		$goodsGalleryModel = D('GoodsGallery');
		
		$argv['info'] = $goodsModel->getGoodsInfo($goods_id);
		
		$argv['album'] = $goodsGalleryModel->getAlbum($goods_id);
		
		//dump($argv['album']);
		
		$commentModel = D('Comment');
		
		

		$this->assign('argv', $argv);

		$this->display('home/goods_view');
	}
	
	public function size_show()
	{
		$this->display('common/size_guide_layer');
	}


}


