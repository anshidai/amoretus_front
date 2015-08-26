<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/users.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
        
    <include file="Common:header" />

    <div class="part_container container">
          
        <include file="User:left_menu" />
        
		<div class="layer_col-1">
			{:W('Common/UserAcountTop')}         
   
			<div class="user-favorite mod-block">
				<div class="mod-title">My Wish List<span>{$total} Items</span></div>
				<div class="mod-blank">
					<div class="wish_item_list item-main-list">
						<ul class="list-item">
							<notempty name="list">
							<foreach name="list" item="vo">
							<li class="item">
								<a class="loveit_icon selected" href="javascript:;"><em></em></a>
								<div class="lovealert unlovealert wish_in">
									<i></i><strong>UNLIKED?</strong><p>Are you sure you want to remove this item from your Wish List</p>
									<a href="javascript:;" class="sign-in-button overlay" rel="{$vo.rec_id}"><span>Yes! Remove</span></a>
									<a href="javascript:;" onclick="this.parentNode.style.display = 'none';return false;" class="cancel_wishbtn"><span>Never Mind!</span></a>
								</div>
								<ul>
									<li class="item-img"><a href="{$vo.url}" target="_blank"><img src="{$vo.goods_thumb}" alt="{$vo.goods_name}"  class="img-responsive"/></a></li>
								</ul>
							</li>
							</foreach>
							</notempty>
						</ul>
						<!-- list-item end-->
						
					</div>
					<!-- wish_item_list item-main-list end-->
				</div>
				<!-- mod-blank end-->
				
			</div>
			<!-- user-favorite mod-block end-->
			
			<div class="mod-page">
				{$show}
			</div>
			<!-- mod-page end-->
			
        </div>
        
    </div>
	<!-- layer_col-1 end-->
		 
</div>
<!-- part_main end-->

<include file="Common:footer" />  

</body>
</html>
