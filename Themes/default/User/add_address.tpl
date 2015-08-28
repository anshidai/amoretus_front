<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Add Address</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
</head>
<body>
<div id="flow" class="part_main">
    
	<include file="Common:user_header" />
    	
	<div class="part_container container">
            <div class="part_col-4">
				<div id="checkout-page" class="flow-checkout-Info">
                    <div class="flow-stepImg hidden-xs"><img src="__CSS__/img/shop_step2.jpg" alt="step 2" usemap="#Map" class="img-responsive"/>
                    <map name="Map">
                      <area shape="rect" coords="3,1,308,48" href="flow.php">
                    </map>
                    </div>
                    <div class="check_right_checkout flow-right-checkout">
                        <div class="block-block flow-items-Info" style="position:relative;">
							<div class="widget_header site-title">
								<img src="__CSS__/img/check_bag.jpg" width="30" height="34" style="vertical-align:top"> 
								<span>2</span> item(s) in your bag
							</div>
							<div class="c_view_item" onclick="toggle_cart(this);">See items <em></em></div>
							<div class="widget_panel show_widget_panel" id="checkout_cart_info" style="display:none;">
								<div class="side-cart-list">
									<table width="98%">
										<tr class="cartBoxList_item">
											<td class="side-cart-img">
												<div><img src="__IMG__/25196_thumb_G_1409650218502.jpg" title="Soft Thin Lacy Bubble Chemises" alt="Soft Thin Lacy Bubble Chemises" /></div>
											</td>
											<td class="side-cart-iteminfo">
												<p class="side-cart-name">
													<a href="" title="Soft Thin Lacy Bubble Chemises"><span class="cartpayItem">Soft Thin Lacy Bubble Chemises</span></a>
												</p>
												<p class="side-cart-attr">
													<span>Size: </span>O/S <br><span>Colour: </span>Red<br>
												</p>
												<p class="side-cart-quantity">
													<b>Qty: </b><span>1*<span class="price-shop"><span>$28.32</span></span></span>
												</p>
											</td>
										</tr>
										<tr class="cartBoxList_item">
											<td class="side-cart-img">
												<div><img src="__IMG__/28560_thumb_G_1436926555418.jpg" title="Sexy Rainbow Fishnet Halter Chemise Lingerie" alt="Sexy Rainbow Fishnet Halter Chemise Lingerie" /></div>
											</td>
											<td class="side-cart-iteminfo"><p class="side-cart-name"><a href="sexy-lingerie-chemises/Sexy-Rainbow-Fishnet-Halter-Chemise-Lingerie-g28560.html" title="Sexy Rainbow Fishnet Halter Chemise Lingerie"><span class="cartpayItem">Sexy Rainbow Fishnet Halter Chemise Lingerie</span></a></p>
												<p class="side-cart-attr">
													<span>Colour: </span>Multi-Colored <br><span>Size: </span>O/S<br>
												</p>
												<p class="side-cart-quantity">
													<b>Qty: </b><span>1*<span class="price-shop"><span>$25.38</span></span></span>
												</p>
											</td>
										</tr>
									</table>
								</div>
								<!-- side-cart-list end-->
							</div>
							<!-- widget_panel show_widget_panel end-->
							
							<div class="c_cart_total">
								<ul>
									<li class="totalprice1">Items Subtotal: <span id="totalprice2">$53.70</span></li>
									<li class="totalprice">Order Total(exc. shipping): <span id="this_total2">$53.70</span></li>
								</ul>
							</div>
							<!-- c_cart_total end-->
						  
						</div>
						<!-- block-block flow-items-Info end-->
					</div>
					<!-- check_right_checkout flow-right-checkout end-->
					
                    <div class="check_left_checkout flow-left-checkout"  >
                    	<div class="flow-user mod-block" id="flow_user_login_box">
							<div class="mod-title">
								<span class="site-title_tit">CHECKOUT </span>
								<span class="login_user">Signed in as <b>makeli</b></span>
								<div class="clear"></div>
							</div>
						</div>
						<!-- flow-user mod-block end-->

						<div class="flow-submit-checkout">
							<script type="text/javascript">
								var consignee_not_null = "Please enter name of consignee!";
								var country_not_null = "Please select a country of consignee!";
								var province_not_null = "Please select a province of consignee!";
								var city_not_null = "Please select a city of consignee!";
								var district_not_null = "Please select a district of consignee!";
								var invalid_email = "Please enter a valid email address.";
								var address_not_null = "Please enter an address!";
								var tele_not_null = "Please enter a phone number!";
								var shipping_not_null = "Please select a shipping method!";
								var payment_not_null = "Please select a payment mode!";
								var goodsattr_style = "1";
								var tele_invaild = "Please enter valid phone No.";
								var zip_not_num = "Zip code should be numbers";
								var mobile_invaild = "Mobile No. is invalid";
							</script>
							<div id="checkout-consignee" class="flow-shippingAddressInfo" style="position:relative;">
								<div class="widget_header site-title" id="CHECKOUT_CONSIGNEE_INFO_HEADER">1. ADDRESSES</div>
									<div id="notice_show" style="display:none;"></div>	
									<div class="widget_panel mod-blank" id="CHECKOUT_CONSIGNEE_INFO_PANEL">
										<form name="checkout_ship_info" id="checkout_ship_info">
											<table class="editinfo">
												<tr>
													<td class="first-txt"><span class="require-field">*</span><span class="txt-r">First Name</span></td>
													<td class="first-txt"><input name="first_name" type="text" class="input-txt" value="" placeholder="First Name" /></td>
													<td class="last-name"><span class="require-field">*</span><span class="txt-r">Last Name</span></td>
													<td class="last-name"><div class="last-txt"><input name="last_name" type="text" class="input-txt" placeholder="Last Name" value="" /></div></td>
												</tr>
												<tr>
													<td class="email-txt"><span class="require-field">*</span><span class="txt-r">Email Address</span></td>
													<td colspan="3"><input name="email" type="text" class="input-full" value="makeli@gmail.com" /></td>
												</tr>
												<tr>
													<td class="country-txt"><span class="require-field">*</span><span class="txt-r">Country</span></td>
													<td>
														<select name="country">
															<option value="14">Algeria</option>
															<option value="3">Australia</option>
															<option value="13">Austria</option>
															<option value="4">Canada</option>
														  </select>
													</td>
													<td class="postal-txt"><span class="require-field">*</span><span class="txt-r">Zip Code</span></td>
													<td><input name="zipcode" type="text" class="input-txt"  id="zipcode_" value="" /></td>
												</tr>
												<tr>
													<td class="city-txt"><span class="require-field">*</span><span class="txt-r">City</span></td>
													<td><input name="sign_building" type="text" class="input-txt" value="" /></td>
													<td class="state-txt"><span class="require-field">*</span><span class="txt-r">State</span></td>
													<td><input name="best_time" type="text"  class="input-txt" value="" /></td>
												</tr>
												<tr>
													<td class="address-txt"><span class="require-field">*</span><span class="txt-r">Address</span></td>
													<td colspan="3"><input name="address" type="text" class="input-full"  value="" /></td>
												</tr>
												<tr>
													<td class="phone-txt"><span class="require-field">*</span><span class="txt-r">Telephone</span></td>
													<td colspan="3"><input name="tel" type="text" class="input-full"  id="tel_" value="" />
														<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
													</td>
												</tr>
												<tr>
													<td></td>
													<td class="user-info-operate" colspan="3">
													<input type="button" name="Submit" class="btn-submit" value="Submit" onclick="return checkSignupForm();" />
													<input type="reset" class="c-btn-cancle" value="Cancel" />
													</td>
												</tr>
											</table>
										</form>
									</div>
									<!-- widget_panel mod-blank end-->
							</div>
							<!-- checkout-consignee end-->
	
							<div class="c_navmod-title">2. DELIVERY</div>
							<div class="c_navmod-title">3. OFFER CODES</div>
							<div class="c_navmod-title">4. ORDER REVIEW</div>
							<div class="c_navmod-title">5. PAYMENT</div>
							<div class="submit-order-opreat">
								<div id="yj_message"></div>
								<input  type="submit" id="BtnSubmitOrder" class="submit-order btn_disabled" value="PLACE ORDER NOW"/>
								<div class="submit-order-notice" style="display:none;"><img src="__CSS__/img/check-ajax-loader.gif">Please wait, processing your order...</div>
							</div>
						</div>
						<!-- flow-submit-checkout end-->
	
					</div>
					<!-- check_left_checkout end-->
				</div>
				<!-- checkout-page end-->
				
			</div>
			<!-- part_col-4 end-->
	</div>
	<!-- part_container container end-->
           
	<include file="Common:user_footer" />
	
	<div class="litb-icon-back-to-top" id="litb-icon-back-to-top" onclick="document.documentElement.scrollTop = 0;document.body.scrollTop = 0;return false;"></div>       
  
</div>
<!-- part_main end-->

<script type="text/javascript">
var process_request = "Please waiting...";
var username_empty = "Please enter email address.";
var username_shorter = "Email address length can\'t less than 3 characters.";
var username_invalid = "Email address only can be composed of letters, figure and underline.";
var password_empty = "(Please input password)";
var password_need = "(6-20 characters must be needed)";
var password_shorter = "(6-20 characters must be needed)";
var confirm_password_invalid = "(Password Not Match)";
var email_empty = "Email can\'t be blank.";
var email_invalid = "(Invalid Email Address!)";
var agreement = "You do not agree with the agreement";
var msn_invalid = "msn address is invalid";
var qq_invalid = "QQ number is invalid";
var home_phone_invalid = "Home phone No. is invalid";
var office_phone_invalid = "Office phone No. is invalid";
var mobile_phone_invalid = "Mobile No. is invalid";
var msg_un_blank = "Email is blank";
var msg_un_length = "Email should not exceed 7 Chinese characters";
var msg_un_format = "Email contain invalid characters";
var msg_un_registered = "Email exists, please enter again";
var msg_can_rg = "You can register";
var msg_email_blank = "(Please input Email Address)";
var msg_email_registered = "Email Address is already registered, please login!";
var msg_email_format = "(Invalid Email Address!)";
var username_exist = "Email Address is already registered, please login!";
var compare_no_goods = "You didn\\\\\\\\'t selected any Items with comparative or the product number is less than 2.";
var btn_buy = "Buy";
var is_cancel = "Cancel";
var select_spe = "Please choose specifications of the items";
</script>

</body>
</html>