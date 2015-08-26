<?php 

namespace Home\Controller;

use Think\Controller;

class CollectController extends AdminController {

	public function index()
	{
		$listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
		
		$collect = D('CollectGoods');

		$user_id = session('user_id');
		
		$total = $collect->where(array('user_id'=>$user_id))->count();
		
		$Page = new \Think\Page($total, $listRows);
		$show = $Page->show(); 
		
		$list = $collect->alias('a')
				->join('__GOODS__ b ON a.goods_id=b.goods_id')
				->where("a.user_id=$user_id")->order('a.add_time desc')
				->limit($Page->firstRow.','.$Page->listRows)->select();
		
		
		if($list) {
			foreach($list as $k=>$val) {
				$list[$k]['goods_thumb'] = C('IMG_HOST').'/'.$val['goods_thumb'];
				$list[$k]['goods_img'] = C('IMG_HOST').'/'.$val['goods_img'];
				$list[$k]['original_img'] = C('IMG_HOST').'/'.$val['original_img'];
				$list[$k]['sale_num'] = intval((1 - $val['shop_price']/$val['market_price'])*100);
				$list[$k]['url'] = build_uri('goods', array('gid'=>$val['goods_id']));
			}
		}
		
		$this->assign('list', $list); 
		$this->assign('page', $show);
		$this->assign('total', $total? $total: 0);
		$this->display('User/collect_index');
	}
	
	public function delete()
	{
		$rec_id = I('get.rec_id', 0, 'intval');
		$this->success('Remove Successful.');
		if(empty($rec_id)) {
			$this->error('Remove Failure.');
		}
		
		if(D('CollectGoods')->where("rec_id='{$rec_id}'")->delete()) {
			$this->success('Remove Successful.');
		}else {
			$this->error('Remove Failure.');
		}
	}
	
	
	
}
