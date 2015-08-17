<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>Shop All Lingerie - Sexy Lingerie - AMORETU</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/global.js"></script>
<script type="text/javascript" src="__JS__/compare.js"></script>
<script type="text/javascript" src="__JS__/transport.js"></script>
<script type="text/javascript" src="__JS__/utils.js"></script>
<script type="text/javascript" src="__JS__/html5.js"></script>
<script type="text/javascript" src="__JS__/respond.min.js"></script>
<script type="text/javascript" src="__JS__/sizzle.js"></script>
<script type="text/javascript" src="__JS__/select.js"></script>
</head>
<body class="part_goodsList">
<div class="part_main">
	
	<include file="Common:header" />

	<div class="part_container container">
    <div class="layer_col-2"> 
		<div class="mod_sidebar_promotion hidden-xs hidden-mid"><a href="" rel="nofollow"><img src="__IMG__/side_chri.jpg" alt="" width="200" height="140" class="img-responsive" /></a></div>
		<div class="mod_categories mod_s_categories hidden-xs">
			<div class="mod-blank">
				<ul>
				<notempty name="argv.attr">
					<foreach name="argv.attr" item="vo">
						<if condition="$vo.attr_values neq '' AND $vo.attr_name neq 'Size'">
						<li>
							<h1 class="c_bg_b"><a href="{$vo.url}" title="{$vo.attr_name}" class="cBlack">{$vo.attr_name}</a></h1>
							<notempty name="vo.attr_values">
								<ul id="tree_child_{$vo.attr_id}" class="cat_children">
								<foreach name="vo.attr_values" item="attr_values">
									<li class="cat_child_list"><h2><a href="{$attr_values.url}" title="{$attr_values.attr_name}">{$attr_values.attr_name}</a></h2></li>  
								</foreach>
								</ul>
							</notempty>
						</li>
						</if>						
					</foreach>
				</notempty>
			</ul>
			</div>
			<!-- mod-blank end-->
		</div>
		<!-- mod_categories ned-->

		
	</div>
	<!-- layer_col-2 end-->
      
	<div class="layer_col-1 w950"> 
		<div class="mod_topbar_promotion clearfix hidden-xs">
			<p><a href=""><img src="__IMG__/gift1.jpg" width="315" height="90" class="img-responsive" /></a></p>
			<p><a href=""><img src="__IMG__/gift2.jpg" width="320" height="90" class="img-responsive" /></a></p>
			<p><a href=""><img src="__IMG__/gift3.jpg" width="315" height="90" class="img-responsive" /></a></p>
		</div>
		<div class="item-cateimg-des"><h1 class="mod-title">Shop All Lingerie</h1></div>
		<div class="item-hot-list item-bestrew-list hidden-xs">
			<div class="mod-title fall-in-tit"><span class="ftit-txt">RECENTLY REVIEWS</span></div>
				<div class="mod-blank">
					<ul class="list-item">
						
						<notempty name="argv.reviews_goods">
						<foreach name="argv.reviews_goods" item="vo">
						<li class="item">
							<ul>
								<li class="item-img"><a href="{$vo.url}"><img src="{$vo.goods_list.goods_thumb}" alt="" width="" height=""  class="img-responsive" /></a></li>
								<li class="best_reviews">
									<p class="best_reviews_txt">{$vo.content}</p>
									<p class="item-rank"><span class="star_2"><span style="width:{$vo.rank}%"></span></span></p>
									<span class="rank_list">{$vo.reviews} reviews</span>
								</li>
							</ul>
						</li>
						</foreach>
						</notempty>
						<li class="clear"></li>
					</ul>
					<!-- list-item end-->
        
				</div>
				<!-- mod-blank end-->
			</div>
			<!-- item-hot-list item-bestrew-list end-->
			
			<div class="list_cat_filter">
				<div id="cat_filter">
					<div class="goodsOptions-choose clearfix">
						<div class="size-choose choose-grade" id="c-size-choose">
							<div class="mod-title-c goodsOptions_sort">
								<div class="sort-t" onmouseover="javascript:document.getElementById('c-size-choose').className = 'size-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-size-choose').className = 'size-choose choose-grade'"><h3>SIZE</h3><em></em></div>
							</div>
							<div class="dropdown" onmouseover="javascript:document.getElementById('c-size-choose').className = 'size-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-size-choose').className = 'size-choose choose-grade'">
								<em class="cart-tan"></em>
								<ul class="facet-all column3">
									<li>
										<ul>
										<notempty name="argv.attr.Size.attr_values">
										<foreach name="argv.attr.Size.attr_values" item="vo">
										<li data-attr_id="{$vo.attr_id}">
											<div>
												<em class="c-choose-S"></em>
												<span class="select_sortvalue">{$vo.attr_name}</span>
												<input type="hidden" value="{$vo.attr_name}">
											</div>
										</li> 
										</foreach>
										</notempty>
										</ul>
									</li>
								</ul>
								<!-- facet-all column3 end-->
							</div>
							<!-- dropdown end-->
						</div>
						<!-- size-choose choose-grade end-->
						
						<div class="colour-choose choose-grade" id="c-colour-choose">
							<div class="mod-title-c goodsOptions_sort">
								<div class="sort-t" onmouseover="javascript:document.getElementById('c-colour-choose').className = 'colour-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-colour-choose').className = 'colour-choose choose-grade'"><h3>COLOR</h3><em></em></div>
							</div>
							<div id="list-Color" class="dropdown" onmouseover="javascript:document.getElementById('c-colour-choose').className = 'colour-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-colour-choose').className = 'colour-choose choose-grade'">
								<em class="cart-tan"></em>
								<ul class="facet-all column3" data-v="Color">
									<li>
										<ul>
											<notempty name="argv.attr.Color.attr_values">
											<foreach name="argv.attr.Color.attr_values" item="vo">
											<li data-attr_id="{$vo.attr_id}">
												<div>
													<span><em></em></span>
													<em class="swatch-black"></em>
													<span class="select_sortvalue">{$vo.attr_name}</span>
													<input type="hidden" value="{$vo.attr_name}">
												</div>
											</li>
											</foreach>
											</notempty>
										</ul>
									</li>
								</ul>
							</div>
							<!-- list-Color end-->
						</div>
						<!-- colour-choose choose-grade end-->
						
						<div class="price-choose choose-grade hidden-xs" id="c-price-choose">
							<div class="mod-title-c goodsOptions_sort">
								<div class="sort-t" onmouseover="javascript:document.getElementById('c-price-choose').className = 'price-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-price-choose').className = 'price-choose choose-grade'"><h3>PRICE</h3><em></em></div>
							</div>
							<div class="dropdown" onmouseover="javascript:document.getElementById('c-price-choose').className = 'price-choose choose-grade choose-open'" onmouseout="javascript:document.getElementById('c-price-choose').className = 'price-choose choose-grade'">
								<em class="cart-tan"></em>
								<ul class="facet-all column3">
									<li>
										<ul>
											<li class="price">
												<div>
													<em class="c-choose-S"></em>
													<span class="select_sortvalue">USD $0.00 - $12.32</span>
												</div>
											</li> 
											<li class="price">
												<div>
													<em class="c-choose-S"></em>
													<span class="select_sortvalue">USD $12.32 - $24.63</span>
												</div>
											</li> 
											<li class="price">
												<div>
													<em class="c-choose-S"></em>
													<span class="select_sortvalue">USD $24.63 - $36.95</span>
												</div>
											</li> 
										</ul>
									</li>
								</ul>
							</div>
							<!-- dropdown end-->
						</div>
						<!-- c-price-choose end-->
        
						<div class="mod-page-total hidden-xs"><span>ALL <span id="all_count">499</span> ITEMS</span></div>
					</div>
				</div>
	</div>
	
	<div class="item-main-list mod-block">
    <div class="mod-blank">
		<ul class="list-item" id="list-item">
			<notempty name="argv.list">
			<foreach name="argv.list" item="vo">
			<li data-cat_id="{$vo.cat_id}" class="item">
				<ul>
					<li class="item-img"><a href="{$vo.url}"><img src="{$vo.goods_thumb}" alt="{$vo.goods_name}" width="250" height="330" class="img-responsive" /></a><span class="swatches" title="MORE COLORS"></span></li>
					<li class="item-name"><a href="{$vo.url}" title="{$vo.goods_name}">{$vo.goods_name}</a></li>
					<li class="item-rank"><span class="star_2"><span style="width:100%"></span></span></li>
					<li class="item_info"><div class="item-price"><span class="price-shop">USD ${$vo.shop_price}</span></div></li>
				</ul>
				 <span class="icnew save_offinfo"><b>{$vo.sale_num}</b></span>
				 <a id="collect_icon_{$vo.goods_id}" class="loveit_icon" href="#"onclick="collect(this);return false;" rel="nofollow"><em></em></a>
			</li>    
			</foreach>			
			</notempty>			
		</ul>
		<!-- list-item end-->
		
		<div class="pages">{$argv.pages}</div>
	</div>
	
	<div class="over_layer" style=" display:none;"></div>
		<div class="list_fixed fixed_item_info" style="display:none;">
			<div class="list_fixed_tit"><span>QUICK VIEW</span>
				<a href="#" onclick="Sizzle('.over_layer')[0].style.display='none';Sizzle('.list_fixed')[0].style.display='none';return false;" class="fixed_close">Close</a>
			</div>
			<div id="quick_view_content"></div>
		</div>
	</div>
	<!-- over_layer end-->
        
	</div>
</div>
    
	<include file="Common:footer" />
    
	<script type="text/javascript" src="__JS__/in-time-to-load.js"></script> 
	<script type="text/javascript" src="__JS__/goods_pic.js"></script>  
	<script type="text/javascript" src="__JS__/goods_view.js"></script>  
</body>
</html>