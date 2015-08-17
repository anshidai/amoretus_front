<?php

namespace Common\Model;

use Think\Model\RelationModel;

class GoodsGalleryModel extends RelationModel {
	
	
	public function getAlbum($goods_id)
	{
		if(empty($goods_id)) return false;
		
		$res = $this->where("goods_id='$goods_id'")->select();
		if($res) {
			foreach($res as $k=>$val) {
				$res[$k]['img_url'] = C('IMG_HOST').'/'.$val['img_url'];
				$res[$k]['thumb_url'] = C('IMG_HOST').'/'.$val['thumb_url'];
				$res[$k]['img_original'] = C('IMG_HOST').'/'.$val['img_original'];
			}
		}
		return $res;
	}
	
	
	
	
	
}