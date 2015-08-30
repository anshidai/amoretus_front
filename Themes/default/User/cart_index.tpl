<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Shopping Bag</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
<script type="text/javascript" src="__JS__/sizzle.js"></script>
<script type="text/javascript" src="__JS__/goods_cart.js"></script>
</head>
<body>
<div id="flow" class="part_main">
	<include file="Common:header" />
	
    <div class="part_container container">
        <div class="part_col-4">
			<div class="flow-stepImg hidden-xs"><img src="__CSS__/img/shop_step1.jpg" alt="step 1" class="img-responsive" /></div>
            <div class="flow-left-checkout">
				<div id="flow_cart_info">
					<div class="mod-shoppingCart-flow mod-block">
						<div class="widget_header site-title">Shopping Bag</div>
						<div class="mod-blank"> 
							<form id="formCart" name="formCart" method="post" action="flow.php" class="form-cart">
								<table>
								<thead class="mod-shoppingCart-th">
									<tr>
									<th align="center" colspan="2" scope="col" class="mod-cartth-name">Items</th>
									<th align="center">Quantity</th>
									<th align="center">Item Price</th>
									<th align="center">Price</th>
									</tr>
								</thead>
								<tbody class="mod-shoppingCart-tb">
								<notempty name="list.goods_list">
								<foreach name="list.goods_list" item="vo">
								<tr>
									<td align="center" class="mod-shoppingCart-pic">
										<div><a href="{$vo.url}" target="_blank" class="itemImg-cart"><img src="{$vo.goods_thumb}" alt="{$vo.goods_name}" /></a></div>
									</td>
									<td colspan="4">
										<table>
											<tr>
												<td class="mod-shoppingCart-name"><a href="{$vo.url}" target="_blank" title="{$vo.goods_name}" class="itemName-cart">{$vo.goods_name}</a></td>
												<td class="mod-shoppingCart-quantity">
													<span id="cart_goods_number_label_{$vo.goods_id}">{$vo.goods_number}</span>
													<input type="text" id="cart_goods_number_{$vo.goods_id}" value="{$vo.goods_number}" style="display:None;">
												</td>
												<td class="mod-shoppingCart-priceShop"><span>{$vo.goods_price}</span></td>
												<td class="mod-shoppingCart-total"><p id="goods_number[{$vo.goods_id}]_price">{$vo.subtotal}</p></td>
											</tr>
											<tr>
												<td colspan="4" class="mod-shoppingCart-attr">
													<ul class="mod-shoppingCart-attrinfo">
														<li class="mod-shoppingCart-Colour">
															<span>Colour:</span>
															<span id="cat_goods_color_label_{$vo.rec_id}"><img src="__CSS__/img/color_red.jpg" width="20px" height="20px"/> Red</span>
														</li>
														<li class="mod-shoppingCart-Size">
															<span>Size:</span>
															<span id="cat_goods_size_label_{$vo.rec_id}">O/S</span>
														</li>
													</ul>
													<div class="mod-shoppingCart-do">
														<a href="javascript:;" class="flowbtn-delete" title="Remove">Remove</a>
													</div>
													<br class="clear" />
												</td>
											</tr>
										</table>
									</td>
								</tr>
								</foreach>
								</notempty>
						</tbody>
						</table>
						</form>
			<table class="flow_discount_list"></table>
        
		<div class="mod-shoppingCart-tf">
			<div class="flow-cart_total">
				<ul id="cart_total" class="clearfix">
					<li class="totalprice1">Subtotal: <span id="totalprice1">{$list.total.goods_price}</span></li>
					<li>
						<p id="AUTO_TOTAL">Grand Total: <span class="ss" id="this_total">{$list.total.goods_amount}</span></p>
					</li>
				</ul>
				<div class="flow-shoppingCart-operate clearfix">
					<a href="/" class="btn-continue1"><input type="button" value="&lt; Continue Shopping" /></a>
					<a href="flow.php?step=checkout" class="flow-btn-checkout" title="check" rel="nofollow">Checkout &gt;</a>
					<br class="clear" />
					<p class="paypal-logo">
						<a href="flow.php?step=paypal_ec">
						<img src="__CSS__/img/btn_xpressCheckout.gif" alt="Checkout with PayPal" title="Checkout with PayPal" /></a>
					</p>
				</div> 
			</div>
			<!-- flow-cart_total end-->
		</div>
		<!-- mod-shoppingCart-tf end-->
		
	</div>
</div>
</div>

</div>

<div class="flow-right-checkout">
	<div class="check_service_info hidden-xs hidden-mid" id="check_service_info">
		<div class="checkout-right-baise">
			<div class="margin_a">
				<p class="service-tit">WE ACCEPT</p>
				<img src="__CSS__/img/cart_paypal.jpg" style=" display:block;" />
			</div>
		</div>
		<div class="checkout-right-baise">
			<div class="margin_a">
				<p class="service-tit">SHIPPING METHOD</p>
				<div class="margin_b">
				<p style="text-align:left;">1. Post Air Mail (Free)</p>
				<p style="text-align:left;">2. DPD RPX (£4) - UK Only</p>
				<p style="text-align:left;">3. Worldwide Royal Mail(£4)</p>
				<p style="text-align:left;">4. UPS (£4) - US Only</p>
				</div>
				<p>&nbsp;</p>
			</div>
		</div>
		<div class="checkout-right-baise" style="">
			<div class="margin_a">
				<p class="service-tit">SECURE CHECKOUT</p>
				<p class="service-infotxt">Shopping on amoretu.com is safe and secure - guaranteed!</p>
				<img src="__CSS__/img/check-norton.jpg">
			</div>
		</div>
		<!-- checkout-right-baise end-->

		<div class="checkout-right-baise" style="">
			<div class="margin_a">
				<p class="service-tit">NEED HELP? <br/>WE'RE HERE</p>
				<p class="service-infotxt">Our customer service are here with shopping advice, items details, order info, and more</p>
				<a href="mailto:service@amoretus.com" class="check-emailbtn">service@amoretus.com</a>
			</div>
		</div>
		<!-- checkout-right-baise end-->
		<div class="checkout-right-baise" style="">
			<div class="margin_a">
			<div class="margin_b">
				<p class="service-tit">SATISFACTION <br/>GUARANTEED</p>
				<p class="service-infotxt">Amoretus.com cares about your complete satisfaction. We offer a comprehensive return policy on all items, allow you to shop with confidence<a href="javascript:;" target="_blank">See Our Return Policy &gt;&gt;</a></p>
			</div>
			<div class="margin_b">
				<p class="service-tit">PRIVACY POLICY</p>
				<p class="service-infotxt">Amoretus.com respect your privacy. We do NOT share or in any way distribute any posonal, business or contact information you may provide.<a href="javascript:;" target="_blank">See Our Privacy Policy &gt;&gt;</a></p>
			</div>
			</div>
		</div> 
		<!-- checkout-right-baise end-->
	</div>
	<!-- check_service_info hidden-xs hidden-mid end-->
</div>
<!-- flow-right-checkout end-->

</div>
</div>
           
	<include file="Common:footer" /> 
</div>

</body>
</html>