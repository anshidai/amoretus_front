<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>{$argv.info.goods_name}</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/sizzle.js"></script>
<script type="text/javascript" src="__JS__/utils.js"></script>
<script type="text/javascript" src="__JS__/goods.js"></script>
<script type="text/javascript" src="__JS__/jquery.imagezoom.min.js"></script>
</head>
<body class="part_goodsDetails">
<div class="part_main">
	<include file="Common:header" />
		
        <div class="part_container container">
			<div class="nav-uHere hidden-xs">
				<ul class="list-uHere">
					<li class="home"><a href="{$argv.site_url}">Home</a>/</li> 
					<li><a href="{$argv.category.url}">{$argv.category.cat_name}</a>/</li>
					<li><span class="mod-curs">{$argv.info.goods_name}</span></li>
				</ul>
			</div>
			<div class="part_col-1">
				<div id="goodsInfo" class="item-detailsInfo mod-block">
					<div class="item-detailsImg clearfix">
						<div class="item-img-big" id="item_good_imgs">
							<img class="img-responsive jqzoom" src="{$argv.album.0.img_url}" rel="{$argv.album.0.img_url}" alt="{$argv.info.goods_name}" width="370" height="488"  />
							<a id="collect_icon_{$argv.info.goods_id}" class="loveit_icon" href="javascript:;" rel="nofollow"><em></em></a>
							<input type="hidden" class="goods_id" value="{$argv.info.goods_id}">
                            <div class="lovealert wish_in">
								<i></i><strong>LIKE IT!</strong><p>Please longin to save your wish List</p>
								<a href="user.php" class="sign-in-button overlay" target="_self" rel="nofollow"><span>Login</span></a>
							</div>
							<div class="lovealert unlovealert wish_in">
								<i></i><strong>UNLIKED?</strong><p>Are you sure you want to remove this item from your Wish List</p>
								<a href="#" onclick="del_collect_by_goods_id(this);return false;" class="sign-in-button overlay" target="_self" rel="nofollow"><span>Yes! Remove</span></a>
								<a href="#" onclick="this.parentNode.style.display = 'none';return false;" class="cancel_wishbtn" target="_self" rel="nofollow"><span>Never Mind!</span></a>
							</div>
						</div>
						<!-- item-img-big end-->
	
						<div class="item-gallery">
							<div class="item-img-turnL updown-disabled" id="item-img-turnL"><em></em></div>
							<div class="mod-blank">
								<div class="ScrCont">
									<div id="List1_G" style="">
										<ul id="item-gallerys">
										<notempty name="argv.album">
										<foreach name="argv.album" item="vo" key="k">
											<li <eq name="k" value="0">class="gallerys_curs"</eq>>
												<a href="javascript:void(0);"><img width="78" height="103" src="{$vo.thumb_url}" mid="{$vo.img_url}" big="{$vo.img_original}" alt="{$argv.info.goods_name}" class="img-responsive" /></a>
											</li>
										</foreach>
										</notempty>
										</ul>
										<!-- item-gallerys end-->
									</div>
									<!-- List1_G end-->
								</div>
								<!-- ScrCont end-->
							</div>
							<!-- mod-blank end-->
							<div class="item-img-turnR" id="item-img-turnR"><em></em></div>
						</div>
						<!-- item-gallery end-->

						<div class="detailsImg-error atpError" id="detailsImg-error" style="display:none;"></div>
					</div>
					<!-- item-detailsImg end-->

					<div class="mod-item-attr">

						<br class="clear"/>
						<form action="javascript:addToCart({$argv.info.goods_id} , 0 , this)" method="post" name="ECS_FORMBUY" id="ECS_FORMBUY" >
							<div class="item-attr-info">
								<h1 class="item-title goods_name_{$argv.info.goods_id}" itemprop="name">{$argv.info.goods_name}</h1>
								<span class="SKU">SKU: {$argv.info.goods_sn}</span>
								<div class="item-rank">
									<span class="view_rank hidden-xs"><a href="#tab_comment_list" rel="nofollow">Average costomers reviews</a></span>
									<span class="star_1"><span style="width:90%"></span></span>
									<span class="write_rank">|&nbsp;&nbsp;<a href="#tab_comment" onclick="show_comment_form()" title="view comment" rel="nofollow" class="rank_a">Write a review</a></span>
								</div>
								<div class="item-price">
									<span class="price-shop"><span class="attr-info goods_price" id="ECS_SHOPPRICE" itemprop="price">USD ${$argv.info.shop_price}</span></span>
									<script type="text/javascript">
										window.shop_price = {$argv.info.shop_price};
									</script>
								</div>
        
								<ul class="list-attr clearfix">
									<li class="list-attr-left goods_attr_list" id="goods_attr_list">
										<ul>
											<li class="list-attr-color attr-box">
												<div class="attr-title">
													<em>Colour</em><a class="selected"><span id="select_color_value"></span></a>
												</div>
												<div class="attr-list" id="colour_list">
												
													<span>
														<a href="javascript:;">
															<div class="label selected">
																<img src="__CSS__/img/color_black.jpg" alt="Black" />
																<em></em>
															</div>
															<span class="attrtip hidden-xs">
																<img src="__CSS__/img/color_black.jpg" alt="" />
																<span class="colour_attrtip"><i>Black</i></span>
																<b>Click to view photo</b>
															</span>
														</a>
														<a href="javascript:;">
															<div class="label selected">
																<img src="__CSS__/img/color_red.jpg" alt="Red" />
																<em></em>
															</div>
															<span class="attrtip hidden-xs">
																<img src="__CSS__/img/color_red.jpg" alt="" />
																<span class="colour_attrtip"><i>Red</i></span>
																<b>Click to view photo</b>
															</span>
														</a>
													</span>
													<div class="atpError" id="colour_atpError" style="display:none"></div>
												</div>
												<!-- attr-list end-->
											</li>
											<li class="list-attr-size attr-box">
												<div class="attr-title">
													<em>Size</em>
													<a class="selected">
														<span id="selected_size"></span>
													</a>
												</div>
												<div class="attr-list clearfix" id="size_list">
													<select name="spec_size" id="spec_size">
													<option value="Size">please choose the size</option>
													<option value="145863" data-value="O/S">O/S(Fits UK size 8-14)</option>
													</select>
													<em class="cursor-Guide hidden-xs" onclick="toggle_login_box(this,event);return false;">Size Guide</em>
													<div class="atpError" id="size_atpError" style="display:none;"></div>
												</div>
												<div class="Size_Guide">
													<div id="Size" style="display:none;">
													<div class="modal"></div>
													<iframe name="iframe_size" class="overlay_iframe_size" src="/index.php?c=goods&a=size_show"></iframe>
													</div>
												</div>
											</li>
											<li class="attr-box goodsOptionsqty module">
												<div class="attr-list clearfix">
													<div class="attr_con_qty">
														<span class="mins qty_change dis_no" onclick="return qty_minus(this)"><span>-</span></span>
														<label><input autocomplete="off" name="number" type="text" id="number" value="1" size="4" class="input-txt" /></label>
														<span class="maxs qty_change" onclick="return qty_add(this)"><span>+</span></span>
													</div>
													<a class="Advice_Men" href="https://www.amoretu.com/sexy-lingerie-guides/gift-guide-for-men" rel="nofollow" target="_blank">Advice for Men</a>
												</div>
											</li>
										</ul>
										<p class="s-none-notice"></p>
									</li>
									<li class="item-operate">
										<button onclick="addToCart(25196,0,this);return false;" class="btn-addToCart">Add to Bag</button>
									</li>
								</ul>
								<!-- list-attr end-->
								
								<script type="text/javascript">
									(function(){
										/*var colour_list_selected = Sizzle('#colour_list .selected span');
										if(colour_list_selected.length > 0){
											document.getElementById('select_color_value').innerHTML = colour_list_selected[1].innerHTML;
										}
										var size_list_selected = Sizzle('#size_list .selected span');
										if(size_list_selected.length > 0){
											document.getElementById('selected_size').innerHTML = size_list_selected[0].innerHTML;
										}*/
										//change_size(document.getElementById('spec_size'));
									}());
								</script>
    	
								<div class="mod_tab_3 mod-block">
									<div class="item-goods-description mod-block" id="tab_details">
										<p>
										<notempty name="argv.attr">
										<foreach name="argv.attr" item="vo">
										<strong>{$vo.attr_name}:</strong> {$vo.attr_value}<br />
										</foreach>
										</notempty>
										</p>
									</div>
								</div>
								<!-- mod_tab_3 end -->
							</div>  
							<!-- item-attr-info end-->
						</form>
					</div>
					<!-- mod-item-attr end-->
					
					<script type="text/javascript" src="__JS__/select.js"></script>
					<br class="clear"/>
				</div>
				<!-- goodsInfo end-->
				
				<div class="mod_tab_3 mod-block">
					<ul class="pos_3" id="tab_title">
						<li data-from_id="tab_guide" id="title_guide" class="curs_title"><b>&nbsp;</b><h3>SIZE GUIDE</h3></li>
						<li data-from_id="tab_return" id="title_return"><b>&nbsp;</b><h3>Return &amp; Exchange</h3></li>
						<li data-from_id="tab_payment" id="title_payment"><b>&nbsp;</b><h3>Payment &amp; Refund</h3></li>
						<li data-from_id="tab_delivery" id="title_delivery"><b>&nbsp;</b><h3>Delivery</h3></li>
					</ul>
					<div class="tab_content_3" id="tab_content">
						<div class="goods_guide_info mod-block" id="tab_guide" style="display:block">
							<table width="100%" class="sizechart">
							  <tr>
								<th rowspan="2" scope="col">Amoretu Size</th>
								<th rowspan="2" scope="col">XS</th>
								<th rowspan="2" scope="col">S</th>
								<th scope="col">M</th>
								<th scope="col">L</th>
								<th rowspan="2" scope="col">XL</th>
								<th rowspan="2" scope="col">XXL</th>
								<th rowspan="2" scope="col">XXXL</th>
								<th rowspan="2" scope="col">4XL</th>
								<th rowspan="2" scope="col">5XL</th>
								<th rowspan="2" scope="col">6XL</th>
							  </tr>
							  <tr>
								<th colspan="2" scope="col">(O/S)</th>
							  </tr>
							  <tr>
								<th scope="row">UK</th>
								<td>4-6</td>
								<td>8</td>
								<td>10</td>
								<td>12</td>
								<td>14</td>
								<td>16</td>
								<td>18</td>
								<td>20</td>
								<td>22</td>
								<td>24</td>
							  </tr>
							  <tr>
								<th scope="row">Euro.</th>
								<td>32/34</td>
								<td>36</td>
								<td>38</td>
								<td>40</td>
								<td>42</td>
								<td>44</td>
								<td>46</td>
								<td>48</td>
								<td>50</td>
								<td>52</td>
							  </tr>
							  <tr>
								<th scope="row">USA / Canada</th>
								<td>0/2</td>
								<td>4</td>
								<td>6</td>
								<td>8</td>
								<td>10</td>
								<td>12</td>
								<td>14</td>
								<td>16</td>
								<td>18</td>
								<td>20</td>
							  </tr>
							  <tr>
								<th scope="row">Australia / NZ</th>
								<td>4-6</td>
								<td>8</td>
								<td>10</td>
								<td>12</td>
								<td>14</td>
								<td>16</td>
								<td>18</td>
								<td>20</td>
								<td>22</td>
								<td>24</td>
							  </tr>
							  <tr><td colspan="11" style="height:10px; line-height:10px;">&nbsp;</td></tr>
							  <tr>
								<th scope="row">Bust (in.)</th>
								<td>31¾ -32½</td>
								<td>33¼</td>
								<td>34¼</td>
								<td>36¼</td>
								<td>38¼</td>
								<td>40⅝</td>
								<td>43</td>
								<td>45⅜</td>
								<td>47¾</td>
								<td>50</td>
							  </tr>
							  <tr>
								<th scope="row">Waist (in.)</th>
								<td>24¾ -25½</td>
								<td>26¼</td>
								<td>27¼</td>
								<td>29¼</td>
								<td>31¼</td>
								<td>34¼</td>
								<td>36⅝</td>
								<td>39</td>
								<td>41⅜</td>
								<td>43¾</td>
							  </tr>
							  <tr>
								<th scope="row">Hips (in.)</th>
								<td>34½ -35¼</td>
								<td>36</td>
								<td>37</td>
								<td>39</td>
								<td>41</td>
								<td>43⅜</td>
								<td>45¾</td>
								<td>48</td>
								<td>50⅜</td>
								<td>52¾</td>
							  </tr>
							  <tr>
								<th scope="row">Bust (cm)</th>
								<td>80.5 - 82.5</td>
								<td>84.5</td>
								<td>87</td>
								<td>92</td>
								<td>97</td>
								<td>103</td>
								<td>109</td>
								<td>115</td>
								<td>121</td>
								<td>127</td>
							  </tr>
							  <tr>
								<th scope="row">Waist (cm)</th>
								<td>62.5 - 64.5</td>
								<td>66.5</td>
								<td>69</td>
								<td>74</td>
								<td>79</td>
								<td>87</td>
								<td>93</td>
								<td>99</td>
								<td>105</td>
								<td>111</td>
							  </tr>
							  <tr>
								<th scope="row">Hips (cm)</th>
								<td>87.5 - 89.5</td>
								<td>91.5</td>
								<td>94</td>
								<td>99</td>
								<td>104</td>
								<td>110</td>
								<td>116</td>
								<td>122</td>
								<td>128</td>
								<td>134</td>
							  </tr>
							  <tr>
								<td colspan="11" style="text-align:left;">
								  <p><b>TIPS:</b></p>
								  <p style="margin-top:10px;">1. Because of different measuring methods, position and fabric stretch, the data will have a deviation of ±1~2cm, the size chart is only for reference.</p>
									<p>2. Color difference may exist between different computer displays, specific please in kind prevail.</p>
							   </td>
							</tr>
						</table>
						
							<div class="Measuring_Guide">
								<p class="Formal_Sizes_tit">Measuring Guide</p>
								<p><span>A. Bust</span><br>Place the measuring tape across your nipples and measure around the largest part of your chest. Be sure to keep the tape parallel to the floor.</p>
								<p><span>B. Waist</span><br>Place the measuring tape about a 1/2 inch above your bellybutton (at the narrowest part of your waist) to measure around your torso. When measuring your waist, exhale and measure before inhaling again.</p>
								<p><span>C. Hips</span><br>Place the measuring tape across the widest part of your hips/buttocks and measure all the way around while keeping the tape parallel to the floor.</p>
							</div>
							<div id="sizeguidepic">
								<img style="margin:0 9px;" src="__CSS__/img/women.gif" alt="" class="img-responsive" />
								<p>&nbsp;</p>
							</div>
							<br class="clear" />
							<div class="Care_Guide">
								<p class="Formal_Sizes_tit">Care Guide</p>
								<p>Care for your clothes properly and they will last and last, we give tips the following:</p>
								<ul>
									<li>Always read the care label and follow the washing instructions</li>
									<li>Be careful not to overload the washing machine</li>
									<li>Sort your washing by similar wash care types and colours</li>
									<li>Always dry your clothes as stated in the wash care label</li>
									<li>Wash your clothes at the correct temperature. If in doubt, always wash at a lower temperature</li>
								</ul>
							</div>
						</div>
						<!-- goods_guide_info mod-block end-->

						<div class="goods_return mod-block" id="tab_return" style="display:none;">
							<div class="Return_txt mod-blank">
								<p class="return-txt1">60 DAYS</p>
								<p class="return-txt2">Returns, Refund Or Exchange</p>
								<p class="return-txt3">
							That's what have been doing and will continue to adhere to: <br />offering Risk-Free Guarantee to settle your worries! For extending the 30 days return &amp; exchange policy to 60 days,<br /> we hope to avoid sometimes you are away from home for vocation and miss the return &amp; exchange time.<br/>
							Thank you for your trust, and for choosing to experience our products!
								</p>
								<div class="Return_txt_notice"><span>DETAILS:</span>
									<p>No ifs, no buts, you can return the items back for refund or exchange in 60 days. </p>
									<p>1). For the exchange or return caused by Amoretu.com(we send you the fault or wrong items), we will undertake the shipping fee</p>
									<p>2). For the exchange or return caused by the customer(choose wrong size or not 100% satisfy with the item), you should pay the shipping charge, thanks for your understanding.</p>
								</div>
							</div>
						</div>
						<!-- goods_return mod-block end-->

						<div class="goods_payment mod-block" id="tab_payment" style="display:none;">
							<div class="payment_txt mod-blank">
								<p style="margin:0px 0px 10px 0px;"><span style="font-weight:700;">Payment method:</span></p>
								<p style="margin-bottom:15px;"><img src="__CSS__/img/tlpay2.jpg" width="110" height="40" alt=""/>&nbsp;&nbsp;<img src="__CSS__/img/paypal2.jpg" width="64" height="40" alt=""/></p>
								<div class="Refund_txt"><span>TIPS:</span>
									<p style="margin:10px 0px 0px 0px;">If you choose the faster way to pay with paypal at shopping bag, the DHL will be the default shipping method.</p>
									<p>And you will be charge £4, you also can check out regularly with other shipping methods</p>
								</div>
								<div class="Refund_txt" style="margin:10px 0px 0px 0px;"><span>Refund:</span>
								<p style="margin:10px 0px 0px 0px;">Refund will be processed once we received the return parcel, you may call PayPal or credit card issuing Bank to verify.</p>
								<p>For Paypal, you can check your account once you receive the confirmation email from Paypal. </p>
								<p>For credit card, refund time may vary for different issuing banks’ policies (usually 15-30 working days).</p>
								</div>
							</div>
						</div>
						<!-- goods_payment mod-block end-->

						<div id="tab_delivery" class="return_delivery" style="display:none;">
							<p style="margin:0px 0px 10px 0px;"><span style="font-weight:700;">Delivery</span></p>
							<table class="Delivery_Time">
								<tbody>
									<tr>
										<th>Delivery Option</th>
										<th>Cost</th>
										<th>Delivery Time</th>
										<th>Available Country</th>
										<th>Tips</th>
									</tr>
									<tr>
										<td>DPD RPX</td>
										<td rowspan="3">£4</td>
										<td>7-10 working days</td>
										<td>UK</td>
										<td rowspan="4" style="text-align:left; width:35%;">
										<p>1. Except for 48 hours processing time.<br>
										2. Peak shopping season may be delayed.<br>
										3. Working days do not include Saturday, Sunday, or Bank Holidays.<br>
										</p>
										</td>
									</tr>
									<tr>
										<td>UPS</td>
										<td>7-10 working days</td>
										<td>US</td>
									</tr>
									<tr>
										<td>Worldwide Royal Mail</td>
										<td>7-10 working days</td>
										<td>Worldwide Available</td>
									</tr>
									<tr>
										<td>Post Air Mail</td>
										<td>Free</td>
										<td>10-20 working days</td>
										<td>Worldwide Available</td>
									</tr>
								</tbody>
							</table>
							<p>&nbsp;</p>
							<p>Overseas customers please note: Any customs or import duties are charged once your parcel reaches its destination country. </p>
							<p>These charges must be paid by you and we have no control over them. We put no indication of the contents on the outside of the parcel.</p>
							<p>&nbsp;</p>
							<div class="Refund_txt"><span>Discreet Packaging</span>
							<p style="margin:10px 0px 0px 0px;">Here at Amoretu we understand that your privacy is extremely important.</p>
							<p>This is why we use high strength, weather-proof, burst and puncture resistant packaging, so we can ensure that you’re the only one who knows what’s inside!</p>
							<p>The only thing that will appear on your parcel will be the address label, which contains your address.</p>
							</div>
							<p>&nbsp;</p>
							<div class="Refund_txt"><span>Delivery Country</span>
							<p style="margin:10px 0px 0px 0px;">United Kingdom: England, Scotland, Wales, Northern Ireland, Channel Islands, Islands of Scotland, Falkland Islands, Isle of Man, Isles of Scilly.</p>
							<p style="margin:10px 0px 0px 0px;">Europe: Andorra, Austria, Belarus, Belgium, Bosnia Herzegovina, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Faroe Islands, Finland, France, Germany, Gibraltar, Greece, Greenland, Holy See (Vatican City State), Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland.</p>
							<p style="margin:10px 0px 0px 0px;">International:
								Algeria, Antigua and Barbuda, Argentina, Aruba, Australia, Azerbaijan, Bahamas, Bahrain, Barbados, Bermuda, Bolivia, Brazil, Brunei Darussalam, Canada, Cayman Islands, China, Dominica, Dominican Republic, Egypt, El Salvador, Equatorial Guinea, French Guiana, Georgia, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Honduras, Hong Kong, India, Israel, Japan, Jamaica, Jordan, Korea, Kuwait, Lao People's Democratic Republic, Madagascar, Mexico, Moldova, Netherlands Antilles, New Zealand, Nicaragua, Oman, Pakistan, Panama, Papua New Guinea, Paraguay, Qatar, Russian Federation, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, Saudi Arabia, Senegal, Singapore, St. Helena, St. Pierre and Miquelon, Taiwan, Trinidad and Tobago, Turks and Caicos Islands, Ukraine, United Arab Emirates, United States, Uruguay, US Minor Outlying Islands, Virgin Islands (British), Virgin Islands (U.S.), Yemen.</p>
							</div>
							<p>&nbsp;</p>
						</div>
						<!-- tab_delivery end-->
					</div>
					<!-- tab_content_3 end-->
				</div>
				<!-- mod_tab_3 mod-block end-->
					
				<script type="text/javascript" src="__JS__/tab1.js"></script>
				<div class="item-releate mod-block hidden-xs">
					<div class="mod-title fall-in-tit"><h3 class="ftit-txt">YOU'LL ALSO LOVE</h3></div>
					<div class="mod-blank">
						<ul class="list-item">
							<li class="item">
								<form method="post">
								<ul class="clearfix">
									<li class="item-img">
										<a href=""><img class="goods_img_28560 img-responsive" src="__IMG__/28560_thumb_G_1436926555418.jpg" alt="Sexy Rainbow Fishnet Halter Chemise Lingerie" width="250" height="330" />
										<span class="item_center_pichelp"></span>
										</a>
										<div class="detailsImg-error atpError" id="detailsImg-error" style="display:none;"></div>                       
									</li>
									<li class="item_type_info">
										<div class="item-name"><a class="goods_name_28560" href="" title="Sexy Rainbow Fishnet Halter Chemise Lingerie">Sexy Rainbow Fishnet Halter Chemise Lingerie</a></div>
										<p class="item-price">
											<span class="price-shop"><span class="goods_price">£16.09</span></span>
										</p>
										<div class="item_desc_con">
											<p>Looking sparkling at the special night and catching your lover's attention on you. Rainbow fishnet halter-style chemise has a great stretch and tightfitting silhouette, finished with black trim detail. Wear the matching thong and fashion jewelry to complete the ensemble.</p>
											<p>&nbsp;</p>
											<p><strong>Category: </strong>Chemise Lingerie</p>
											<p><strong>Material:</strong> Polyester/Spandex</p>
											<p><strong>Includes: </strong>1 X Dress, 1 X Thong</p>
											<p><strong>Features: </strong>look sexy and hot, rainbow, halter, fishnet</p>
											<p><strong>Size Advice: </strong>O/S(Fits for UK 4-16)</p>
											<p><strong>Occasion:</strong> Night Club, Summer, Bedtime</p>
										</div>
									</li>
									<li class="releated_item_attr">
										<div class="goods_attr_list">
											<ul>
												<li class="list-attr-color attr-box">
													<div class="attr-title">
														<em>Colour</em>
														<a class="selected">
															<span class="releated_select_color_value"></span>
														</a>
													</div>
													<div class="attr-list">
														<input type="radio" class="spec_colour" name="spec_colour" value="Colour" style="display:none" checked="checked">
														<span onclick="return select_releated_color(this);">
															<a>
															<div class="label">
															<img src="__CSS__/img/color_pink.jpg" alt=""/>
															<em></em>
															<span class="color_size">One Size</span>
															<span class="color_img">https://www.amoretu.com/images/201507/goods_img/28560_P_1436926555227.jpg</span>
															<span class="color_id">158404</span>
															<span class="color_value">Multi-Colored</span>
															</div>
															<span class="attrtip hidden-xs">
																<img src="__CSS__/img/color_red.jpg" alt="" />
																<span class="colour_attrtip"><i>Multi-Colored</i></span>
																<b>Click to view photo</b>
															</span>
															</a>
														</span>
														<div class="atpError" style="display:none"></div>
													</div>
													<!-- attr-list end-->
													
												</li>
												<li class="list-attr-size attr-box">
													<div class="attr-title">
														<em>Size</em>
														<a class="selected">
															<span class="releated_select_size"></span>
														</a>
													</div>
													<div class="attr-list clearfix">
														<select name="spec_size" style="" onchange="select_releated_size(this)">
														<!--option value="Size">Size</option-->
															<option value="158405" data-value="O/S">O/S(Fits UK size 10-12)</option>
														</select>
														<em class="cursor-Guide" onclick="toggle_login_box(this,event);return false;">Size Guide</em>
														<div class="atpError" style="display:none;"></div>
													</div>
													<div class="Size_Guide">
														<div id="releated_Size" style="display:none;">
														<div class="modal"></div>
														<iframe name="iframe_size" class="overlay_iframe_size" src="/index.php?c=goods&a=size_show"></iframe>
														</div>
													</div>
												</li>

												<li class="attr-box goodsOptionsqty module">
												<div class="attr-list clearfix">
													<div class="attr_con_qty">
													<span class="mins qty_change dis_no" onclick="return qty_minus(this)"><span>-</span></span>
													<label><input autocomplete="off" name="number" type="text" id="releated_number" value="1" size="4" class="input-txt" /></label>
													<span class="maxs qty_change" onclick="return qty_add(this)"><span>+</span></span>
													</div>
												</div>
												</li>
												<li class="s-none-notice" style="display: none;">Please select Colour</li>
											</ul>
										</div>
										<!-- goods_attr_list end-->
										<div class="item-operate"><button onclick="addYouMayAlsoLikeToCart(28560,0,this);return false;" class="btn-addToCart">Add to Bag</button></div>
									</li>
								</ul>
								</form>
							</li>
							
							<li class="item item-odd">
								<form method="post">
								<ul class="clearfix">
									<li class="item-img">
										<a href=""><img class="goods_img_28550 img-responsive" src="__IMG__/25679_G_1409650312399.jpg" alt="Strappy Sequin Cups Chemise Lingerie" width="250" height="330" />
										<span class="item_center_pichelp"></span>
										</a>
										<div class="detailsImg-error atpError" id="detailsImg-error" style="display:none;"></div>                       
									</li>
									<li class="item_type_info">
										<div class="item-name"><a class="goods_name_28550" href="https://www.amoretu.com/sexy-lingerie-chemises/Strappy-Sequin-Cups-Chemise-Lingerie-g28550.html" title="Strappy Sequin Cups Chemise Lingerie">Strappy Sequin Cups Chemise Lingerie</a></div>
										<p class="item-price">
										<span class="price-shop"><span class="goods_price">£18.95</span></span>
										</p>
										<div class="item_desc_con">
											<div><strong>Material:</strong>&nbsp;Polyester/Spandex</div>
											<div><strong>Decorative details: </strong>Sequins</div>
											<div><strong>Product features:</strong>&nbsp;Hollow Out; Lace</div>
											<div><strong>Includes:&nbsp;</strong>1 X Dress; 1 X Pant</div>
										</div>
									</li>
									<li class="releated_item_attr">
									<div class="goods_attr_list">
										<ul>
											<li class="list-attr-color attr-box">
												<div class="attr-title">
													<em>Colour</em>
													<a class="selected">
														<span class="releated_select_color_value"></span>
													</a>
												</div>
												<div class="attr-list">
													<input type="radio" class="spec_colour" name="spec_colour" value="Colour" style="display:none" checked="checked">
													<span onclick="return select_releated_color(this);">
														<a>
														<div class="label">
														<img src="__CSS__/img/color_pink.jpg" alt=""/>
														<em></em>
														<span class="color_size">One Size</span>
														<span class="color_img">https://www.amoretu.com/images/201507/goods_img/28550_P_1435716753014.jpg</span>
														<span class="color_id">158353</span>
														<span class="color_value">Red</span>
														</div>
														<span class="attrtip hidden-xs">
															<img src="__CSS__/img/color_pink.jpg" alt="" />
															<span class="colour_attrtip"><i>Red</i></span>
															<b>Click to view photo</b>
														</span>
														</a>
													</span>
													<div class="atpError" style="display:none"></div>
												</div>
											</li>
											<li class="list-attr-size attr-box">
												<div class="attr-title">
													<em>Size</em>
													<a class="selected">
														<span class="releated_select_size"></span>
													</a>
												</div>
												<div class="attr-list clearfix">
													<select name="spec_size" style="" onchange="select_releated_size(this)">
														<!--option value="Size">Size</option-->
														<option value="158354" data-value="O/S">O/S(Fits UK size 10-12)</option>
													</select>
													<em class="cursor-Guide" onclick="toggle_login_box(this,event);return false;">Size Guide</em>
													<div class="atpError" style="display:none;"></div>
												</div>
												<div class="Size_Guide">
													<div id="releated_Size" style="display:none;">
														<div class="modal"></div>
														<iframe name="iframe_size" class="overlay_iframe_size" src="/index.php?c=goods&a=size_show"></iframe>
													</div>
												</div>
											</li>

											<li class="attr-box goodsOptionsqty module">
												<div class="attr-list clearfix">
													<div class="attr_con_qty">
														<span class="mins qty_change dis_no" onclick="return qty_minus(this)"><span>-</span></span>
														<label><input autocomplete="off" name="number" type="text" id="releated_number" value="1" size="4" class="input-txt" /></label>
														<span class="maxs qty_change" onclick="return qty_add(this)"><span>+</span></span>
													</div>
												</div>
											</li>
											<li class="s-none-notice" style="display: none;">Please select Colour</li>
										</ul>
									</div>
									<!-- goods_attr_list end-->
									<div class="item-operate"><button onclick="addYouMayAlsoLikeToCart(28550,0,this);return false;" class="btn-addToCart">Add to Bag</button></div>
									</li>
								</ul>
								</form>
							</li>
							<!-- item end-->
						</ul>
					</div>
					<!-- mod-blank end-->
				</div>
				
				
				<script type="text/javascript">
					var button_compare = '';
					var exist = "You have chosen %s";
					var count_limit = "Maximum 4 products can be chosen for comparison";
					var goods_type_different = "\\\"%s\\\"cannot be compared with Items chosen due to types differences";
					var compare_no_goods = "You didn\\\\\\\\'t selected any Items with comparative or the product number is less than 2.";
					var btn_buy = "Buy";
					var is_cancel = "Cancel";
					var select_spe = "Please choose specifications of the items";
				</script>                        
				<div class="chris_sale_offer" style="margin-bottom:10px;">
					<a href="https://www.amoretu.com/sexy-christmas"><img src="__IMG__/20141110_lingerie_chris880x120.jpg" width="880" height="120" alt="Merry Christmas UP TO 50% OFF" class="img-responsive" /></a>
				</div>
    
		<div class="goods_other_tab">
			<div id="tab_comment">
				<div class="mod-title fall-in-tit"><h2 class="ftit-txt">Ratings &amp; Reviews</h2></div>
				<div id="ECS_COMMENT">
					<div class="mod-comment  mod-block">
						<div class="item-rank">
							<span class="star_1"><span style="width:90%"></span></span><span class="write_rank"></span>
						</div>
						<div class="mod-title1"><span class="mod-page-total">Total <strong>2</strong></span> Reviews for: Soft Thin Lacy Bubble Chemises</div>
						<div class="mod-blank">
							<div class="show_comment_form"><input type="submit" value="Write a Review" class="btn-submit_review" id="show_comment_form_btn" onclick="show_comment_form()"/></div>
							<form action="javascript:;" onsubmit="submitComment(this)" method="post" name="commentForm" id="commentForm" class="form-comment" style=" display:none;">
								<table>
									<tr>
										<td>
											<span class="w_comment_tit w_comment_txttit">Nickname</span>
											<span class="input-txt"><input type="text" name="username" id="username"  maxlength="100" value="" /></span><span id="username_msg"></span>
										</td>
									</tr>
									<tr>
										<td>
											<div id="" class="w_comment w_comment_Rating w_commentField w_comment_error BVRadioField">
												<label id="" for="BVFieldRatingID" class="w_comment_RatingLabel">
												<span class="w_comment_tit w_comment_ratingtit">Overall Rating
												<span class="w_commenthelper">Select the number of stars that reflects your overall item rating.</span>
												</span>
												</label>
												<div id="w_comment_RatingStarsID" class="w_comment_ratingstars">
													<input type="hidden" id="comment_rank" name="comment_rank" value="0">
													<div class="star star_group_rating star_live"><a tabindex="0" href="#" onmouseenter="hover_star(1);" onmouseleave="blur_star();" onclick="return click_star(1);" id="star_link_rating_1" name="" title="Poor">1</a></div>
													<div class="star star_group_rating star_live"><a tabindex="0" href="#" onmouseenter="hover_star(2);" onmouseleave="blur_star();" onclick="return click_star(2);" id="star_link_rating_2" name="" title="Fair">2</a></div>
													<div class="star star_group_rating star_live"><a tabindex="0" href="#" onmouseenter="hover_star(3);" onmouseleave="blur_star();" onclick="return click_star(3);" id="star_link_rating_3" name="" title="Average">3</a></div>
													<div class="star star_group_rating star_live"><a tabindex="0" href="#" onmouseenter="hover_star(4);" onmouseleave="blur_star();" onclick="return click_star(4);" id="star_link_rating_4" name="" title="Good">4</a></div>
													<div class="star star_group_rating star_live"><a tabindex="0" href="#" onmouseenter="hover_star(5);" onmouseleave="blur_star();" onclick="return click_star(5);" id="star_link_rating_5" name="" title="Excellent">5</a></div>
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<td>
											<div id="BVFieldRatingFitContainerID" class="w_commentField w_commentFit BVFieldRatingsGroup BVRadioField">
												<label id="BVFieldRatingFitLabelID" for="BVFieldRatingFitID" class="BVRatingDimensionsFitLabel">
													<span class="w_comment_tit w_comment_fittit">Fit Rating<span>(Optional)</span><span class="BVFieldLabelSuffix">:</span></span>
												</label>
												<span id="BVFieldRatingFitContainerID">
													<span id="BVFieldRatingFitLegendID" class="BVFieldLegend BVUnset">True To Size</span>
													<span class="BVFieldLowValue">Runs Small</span>
													<span class="BVFieldRadioContainer BVFieldRadioContainer1">
														<input type="radio" id="BVFieldRatingFit1ID" name="rating_Fit" value="1" onclick="" class="BVFieldRadio BVFieldRadioRatingDimensionsFitRadioButtons" onkeypress="return bvDisableReturn(event);" checked="checked">
														<label onclick="document.getElementById('BVFieldRatingFitLegendID').innerHTML=this.innerHTML;select_fit(this)" id="BVFieldRatingFit1LabelID" for="BVFieldRatingFit1ID" class="BVFieldRadioLabelFit">Runs Small</label>
													</span>
													<span class="BVFieldRadioContainer BVFieldRadioContainer2">
														<input type="radio" id="BVFieldRatingFit2ID" name="rating_Fit" value="2" class="BVFieldRadio BVFieldRadioRatingDimensionsFitRadioButtons" onclick="" onkeypress="return bvDisableReturn(event);">
														<label onclick="document.getElementById('BVFieldRatingFitLegendID').innerHTML=this.innerHTML;select_fit(this)" id="BVFieldRatingFit2LabelID" for="BVFieldRatingFit2ID" class="BVFieldRadioLabelFit">Slightly Small</label>
													</span>
													<span class="BVFieldRadioContainer BVFieldRadioContainer3">
														<input type="radio" id="BVFieldRatingFit3ID" name="rating_Fit" value="3" class="BVFieldRadio BVFieldRadioRatingDimensionsFitRadioButtons" onclick="" onkeypress="return bvDisableReturn(event);" checked>
														<label onclick="document.getElementById('BVFieldRatingFitLegendID').innerHTML=this.innerHTML;select_fit(this)" id="BVFieldRatingFit3LabelID" for="BVFieldRatingFit3ID" class="BVFieldRadioLabelFit BVSelected">True To Size</label>
													</span>
													<span class="BVFieldRadioContainer BVFieldRadioContainer4">
														<input type="radio" id="BVFieldRatingFit4ID"  name="rating_Fit" value="4" class="BVFieldRadio BVFieldRadioRatingDimensionsFitRadioButtons" onclick="" onkeypress="return bvDisableReturn(event);">
														<label onclick="document.getElementById('BVFieldRatingFitLegendID').innerHTML=this.innerHTML;select_fit(this)" id="BVFieldRatingFit4LabelID" for="BVFieldRatingFit4ID" class="BVFieldRadioLabelFit">Slightly Large</label>
													</span>
													<span class="BVFieldRadioContainer BVFieldRadioContainer5"> 
														<input type="radio" id="BVFieldRatingFit5ID" name="rating_Fit" value="5" class="BVFieldRadio BVFieldRadioRatingDimensionsFitRadioButtons" onclick="" onkeypress="return bvDisableReturn(event);">
														<label onclick="document.getElementById('BVFieldRatingFitLegendID').innerHTML=this.innerHTML;select_fit(this)" id="BVFieldRatingFit5LabelID" for="BVFieldRatingFit5ID" class="BVFieldRadioLabelFit">Runs Large</label>
													</span>
													<span class="BVFieldHighValue">Runs Large</span>
												</span>
											</div>
										</td>
									</tr>
									<tr>
										<td>
										<div id="BVFieldTitleContainerID" class="w_comment_Field w_comment_Title BVTextField BVFieldRequired BVImportantField">
											<label id="BVFieldTitleLabelID" for="BVFieldTitleID" class="BVCoreTitleLabel">
											<span class="w_comment_tit w_comment_Ttit">Review Title</span></label>
											<span class="w_commenthelper">Example: "Best Purchase Ever."</span>
											<span class="BVInputWrapper input-txt">
												<input type="text" id="BVFieldTitleID" maxlength="150" name="title" class="BVFieldText BVFieldTextCoreTitleTextBox BVError" onkeypress="return bvDisableReturn(event);">
											</span>
										</div>                
										</td>
									</tr>
									<tr>
										<td>
											<span class="w_comment_tit w_comment_txttit">Your Review</span>
											<span class="input-txtA"><textarea name="content" class="comment_content"></textarea></span><span id="content_msg"></span>
											<input type="hidden" name="cmt_type" value="0" />
											<input type="hidden" name="id" value="25196" />
										</td>
									</tr>
									<tr>
										<td>
											<div class="form-comment-notice" id="form-comment-notice"></div>
											<div class="form-comment-operate"><input type="submit" value="submit" class="btn-submit"/></div>
										</td>
									</tr>
								</table>
							</form>
			
							<ul class="comment_list" id="tab_comment_list">
								<li class="comment" itemprop="review" itemscope itemtype="http://schema.org/Review">
									<div class="comment-userinfo">
										<div class="comment-bar"><span>Overall Rating  </span><img src="__CSS__/img/stars4.png" alt="" class="mod-comment-rank" /></div>
										<div class="typeFit">
											<span class="">Fit Rating</span>
											<span class="">:&nbsp;&nbsp;</span>True To Size 
										</div>
										<div class="Fit_SliderImage">
											<img src="__CSS__/img/ratingSlider3.gif" alt="" title="">
										</div>
										<div class="comment-userName">by <span>Mamie</span></div>
										<span class="mod-comment-date" itemprop="datePublished"> Sep 22,2014 </span>
									</div>
									<!-- comment-userinfo end-->
									
									<div class="comment-content">
										<div class="comment-details">
											<span class="comment_ReviewTitle">Four Stars</span>
											<p itemprop="description">Ta ricooooo<em></em></p><br class="clear" />
										</div>
									</div>
									<br class="clear" />
								</li>
								<li class="comment" itemprop="review" itemscope itemtype="http://schema.org/Review">
									<div class="comment-userinfo">
										<div class="comment-bar"><span>Overall Rating  </span><img src="__CSS__/img/stars5.png" alt="" class="mod-comment-rank" /></div>
										<div class="typeFit">
											<span class="">Fit Rating</span>
											<span class="">:&nbsp;&nbsp;</span>True To Size 
										</div>
										<div class="Fit_SliderImage">
											<img src="__CSS__/img/ratingSlider3.gif" alt="" title="">
										</div>
										<div class="comment-userName">by <span>Darlene</span></div>
										<span class="mod-comment-date" itemprop="datePublished"> Sep 22,2014 </span>
									</div>
									<!-- comment-userinfo end-->
									
									<div class="comment-content">
										<div class="comment-details">
											<span class="comment_ReviewTitle">Five Stars</span>
											<p itemprop="description">Love it!!!! Will be ordering again very soon<em></em></p><br class="clear" />
										</div>
									</div>
									<br class="clear" />
								</li>
							</ul>
						</div>
						<!-- mod-blank end-->
					</div> 
					<!-- mod-comment  mod-block end-->

					<script type="text/javascript">
						var cmt_empty_username = "Please enter Email Address.";
						var cmt_empty_email = "Please enter email address.";
						var cmt_error_email = "Please enter a valid email address.";
						var cmt_empty_content = "Please enter content.";
						var captcha_not_null = "Please enter verification code!";
						var cmt_invalid_comments = "Invalid commentary contents!";
						function show_comment_form(){
							document.getElementById('form-comment-notice').innerHTML = '';
							document.getElementById('show_comment_form_btn').style.display = 'none';
							document.getElementById('commentForm').style.display = 'block';
							return false;
						}
					</script>
					<script type="text/javascript" src="__JS__/comment_view.js"></script>
				</div>
				<!-- ECS_COMMENT end-->
			</div>
			<!-- tab_comment end-->
		</div>
	<!-- goods_other_tab end-->
    <div class="over_layer" style="display: none;"></div>
		<div class="list_fixed fixed_item_info" style="display: none;">
			<div class="list_fixed_tit"><span></span>
				<a href="#" onclick="Sizzle('.over_layer')[0].style.display='none';Sizzle('.list_fixed')[0].style.display='none';return false;" class="fixed_close">Close</a>
			</div>
			<table style="width:100%;" class="fixed_itemlist">
				<tr>
				  <th class="fixed_name_th">Items</th>
				  <th>Colour</th>
				  <th>Size</th>
				  <th>Qty</th>
				  <th>Price</th>
				</tr>
				<tr>
				  <td class="fixed_name" id="added_goods_name">
				  <img src="__CSS__/img/no_picture.jpg" width="70" height="100" alt="" /><span class="hidden-xs"></span>
				  </td>
				  <td id="added_goods_color"></td>
				  <td id="added_goods_size"></td>
				  <td id="added_goods_qty"></td>
				  <td id="added_goods_price"></td>
				</tr>
				<tr id="deal_goods_td" style="display:None;">
				  <td class="fixed_name" id="added_goods_name_deal_goods">
				  <img src="__CSS__/img/no_picture.jpg" width="70" height="100" alt="" /><span class="hidden-xs"></span>
				  </td>
				  <td id="added_goods_color_deal_goods"></td>
				  <td id="added_goods_size_deal_goods"></td>
				  <td id="added_goods_qty_deal_goods"></td>
				  <td id="added_goods_price_deal_goods"></td>
				</tr>
			</table>
			<div class="fixed_item_total">
				<p class="fixed_item_num"><span></span> Items in Your <a href="https://www.amoretu.com/flow.php?step=cart" rel="nofollow">Shopping Bag</a></p>
				<div id="fixed_AUTO_TOTAL">
					<p class="totalprice">Total(excl shipping): <span class="ss"></span></p>
				</div>
				<br class="clear"/>
			</div>

			<div class="fixed-item-operate">
				<a href="https://www.amoretu.com/flow.php?step=cart" rel="nofollow" class="view_checkout hidden-xs">View Cart &amp; Checkout</a>
				<a href="#" onclick="Sizzle('.over_layer')[0].style.display='none';Sizzle('.list_fixed')[0].style.display='none';return false;" class="btn-continue1 hidden-xs"><span>Continue Shopping</span></a>
				<br class="clear"/>
			</div>

		</div>
		<!-- list_fixed fixed_item_info end-->
		
	</div>
	<!-- over_layer end-->
				
</div>
				 
</div>
			
	<include file="Common:footer" />
</body>
</html>