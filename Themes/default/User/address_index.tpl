<!DOCTYPE html> 
<html> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
    
	<include file="Common:header" />

	<div class="part_container container">
		<include file="User:left_menu" />
        
		<div class="layer_col-1">
			{:W('Common/UserAcountTop')}                                      
                                
			<div class="user-consigneesInfo mod-block">
                <div class="mod-title">Address Book</div>
                <div class="mod-blank">
					<div style="display:none;" class="info_message" id="notice_show"></div>
						<div id="address_lists">
						<form id="form-checkConsignee-user_186" style="display:none;" class="form-checkConsignee-user" onsubmit="return checkConsignee(this)" name="theForm" method="post" action="user.php" target="hidden_frame">
							<table class="usereditinfo">
								<tbody><tr>
								<td class="first-txt"><span class="require-field">*</span><span class="txt-r">First Name</span></td>
								<td class="first-txt"><input type="text" placeholder="First Name" value="makes" id="first_name_0" class="input-txt" name="first_name"></td>
								<td class="last-name"><span class="require-field">*</span><span class="txt-r">Last Name</span></td>
								<td class="last-name"><div class="last-txt"><input type="text" placeholder="Last Name" value="li" id="last_name_0" class="input-txt" name="last_name"></div></td>
								</tr>
								<tr>
								<td class="email-txt"><span class="require-field">*</span><span class="txt-r">Email Address</span></td>
								<td colspan="3"><input type="text" value="makeli@gmail.com" class="input-full" name="email"></td>
								</tr>
								<tr>
								<td class="country-txt"><span class="require-field">*</span><span class="txt-r">Country</span></td>
								<td>
								<select name="country">
										<option value="14">Algeria</option>
										<option value="3">Australia</option>
										<option selected="" value="13">Austria</option>
										<option value="4">Canada</option>
										<option value="81">Denmark</option>
								  </select>
								</td>
								<td class="postal-txt"><span class="require-field">*</span><span class="txt-r">Zip Code</span></td>
								<td><input type="text" value="56532" id="zipcode_0" class="input-txt" name="zipcode"></td>
								</tr>
								<tr>
								<td class="city-txt"><span class="require-field">*</span><span class="txt-r">City</span></td>
								<td><input type="text" value="America" id="sign_building_0" class="input-txt" name="sign_building"></td>
								<td class="state-txt"><span class="require-field">*</span><span class="txt-r">State</span></td>
								<td><input type="text" value="neai" id="best_time_0" class="input-txt" name="best_time"></td>
								</tr>
								<tr>
								<td class="address-txt"><span class="require-field">*</span><span class="txt-r">Address</span></td>
								<td colspan="3"><input type="text" value="America neai" class="input-full" name="address"></td>
								</tr>
								<tr>
								<td class="phone-txt"><span class="require-field">*</span><span class="txt-r">Telephone</span></td>
								<td colspan="3"><input type="text" value="1355328634" class="input-full" id="mobile_0" name="tel">
								<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
								</td>
								</tr>
								<tr>
								<td></td>
								<td colspan="3" class="user-info-operate">
								<a onclick="return cancel_edit_address(186)" class="type_back" href="#">Back</a>
								<input type="submit" value="Save Address" class="btn-submit" name="submit">
										<input type="hidden" value="act_edit_address" name="act">
								<input type="hidden" value="186" name="address_id"> 
								</td></tr>
								</tbody>
							</table>
						</form>
						<div id="Account-shippingInfo_186" class="Account-shippingInfo">
							<ul class="clearfix">
								<li><label>
									<span>makes</span><span class="shippingInfo-1"> li</span><br>
									<span>America neai</span><br>
									<span>America, </span><span>neai, </span><span>56532</span><br>
									<span>Austria</span><br><span>T: 1355328634</span><br>
									</label>
									<p>
										<input type="button" value="Change Shipping Address" onclick="return edit_user_addresss(186)" class="mod_modify_change">
										<input type="button" value="Delete" class="btn-delete" onclick="if (confirm('Are you sure delete the place of receipt?'))location.href='user.php?act=drop_consignee&amp;id=186'" name="button">
									</p>
								</li>
							</ul>    
						</div>

						<form id="form-checkConsignee-user_187" style="display:none;" class="form-checkConsignee-user" onsubmit="return checkConsignee(this)" name="theForm" method="post" action="user.php" target="hidden_frame">
							<table class="usereditinfo">
								<tbody><tr>
								<td class="first-txt"><span class="require-field">*</span><span class="txt-r">First Name</span></td>
								<td class="first-txt"><input type="text" placeholder="First Name" value="makes" id="first_name_1" class="input-txt" name="first_name"></td>
								<td class="last-name"><span class="require-field">*</span><span class="txt-r">Last Name</span></td>
								<td class="last-name"><div class="last-txt"><input type="text" placeholder="Last Name" value="li" id="last_name_1" class="input-txt" name="last_name"></div></td>
								</tr>
								<tr>
								<td class="email-txt"><span class="require-field">*</span><span class="txt-r">Email Address</span></td>
								<td colspan="3"><input type="text" value="makeli@gmail.com" class="input-full" name="email"></td>
								</tr>
										
								<tr>
								<td class="country-txt"><span class="require-field">*</span><span class="txt-r">Country</span></td>
								<td>
								<select name="country">
										<option value="14">Algeria</option>
										<option value="3">Australia</option>
										<option selected="" value="13">Austria</option>
										<option value="4">Canada</option>
										<option value="81">Denmark</option>
										<option value="82">Finland</option>
								  </select>
								</td>
								<td class="postal-txt"><span class="require-field">*</span><span class="txt-r">Zip Code</span></td>
								<td><input type="text" value="56532" id="zipcode_1" class="input-txt" name="zipcode"></td>
								</tr>
								<tr>
								<td class="city-txt"><span class="require-field">*</span><span class="txt-r">City</span></td>
								<td><input type="text" value="America" id="sign_building_1" class="input-txt" name="sign_building"></td>
								<td class="state-txt"><span class="require-field">*</span><span class="txt-r">State</span></td>
								<td><input type="text" value="neai" id="best_time_1" class="input-txt" name="best_time"></td>
								</tr>
								<tr>
								<td class="address-txt"><span class="require-field">*</span><span class="txt-r">Address</span></td>
								<td colspan="3"><input type="text" value="America neai" class="input-full" name="address"></td>
								</tr>
								<tr>
								<td class="phone-txt"><span class="require-field">*</span><span class="txt-r">Telephone</span></td>
								<td colspan="3"><input type="text" value="1355328634" class="input-full" id="mobile_1" name="tel">
								<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
								</td>
								</tr>
								<tr>
								<td></td>
								<td colspan="3" class="user-info-operate">
										<a onclick="return cancel_edit_address(187)" class="type_back" href="#">Back</a>
								<input type="submit" value="Save Address" class="btn-submit" name="submit">
										<input type="hidden" value="act_edit_address" name="act">
								<input type="hidden" value="187" name="address_id"> 
								</td></tr>
							</tbody></table>
						</form>
						<div id="Account-shippingInfo_187" class="Account-shippingInfo">
							<ul class="clearfix">
								<li><label>
									<span>makes</span><span class="shippingInfo-1"> li</span><br>
									<span>America neai</span><br>
									<span>America, </span><span>neai, </span><span>56532</span><br>
									<span>Austria</span><br><span>T: 1355328634</span><br>
									</label>
									<p>
										<input type="button" value="Change Shipping Address" onclick="return edit_user_addresss(187)" class="mod_modify_change">
										<input type="button" value="Delete" class="btn-delete" onclick="if (confirm('Are you sure delete the place of receipt?'))location.href='user.php?act=drop_consignee&amp;id=187'" name="button">
									</p>
								</li>
							</ul>    
						</div>
						<form id="form-checkConsignee-user_188" style="display:none;" class="form-checkConsignee-user" onsubmit="return checkConsignee(this)" name="theForm" method="post" action="user.php" target="hidden_frame">
							<table class="usereditinfo">
								<tbody><tr>
								<td class="first-txt"><span class="require-field">*</span><span class="txt-r">First Name</span></td>
								<td class="first-txt"><input type="text" placeholder="First Name" value="makei" id="first_name_2" class="input-txt" name="first_name"></td>
								<td class="last-name"><span class="require-field">*</span><span class="txt-r">Last Name</span></td>
								<td class="last-name"><div class="last-txt"><input type="text" placeholder="Last Name" value="li" id="last_name_2" class="input-txt" name="last_name"></div></td>
								</tr>
								<tr>
								<td class="email-txt"><span class="require-field">*</span><span class="txt-r">Email Address</span></td>
								<td colspan="3"><input type="text" value="makeli@gmail.com" class="input-full" name="email"></td>
								</tr>
										
								<tr>
								<td class="country-txt"><span class="require-field">*</span><span class="txt-r">Country</span></td>
								<td>
								<select name="country">
									<option value="14">Algeria</option>
									<option value="3">Australia</option>
									<option selected="" value="13">Austria</option>
									<option value="4">Canada</option>
								</select>
								</td>
								<td class="postal-txt"><span class="require-field">*</span><span class="txt-r">Zip Code</span></td>
								<td><input type="text" value="4324234" id="zipcode_2" class="input-txt" name="zipcode"></td>
								</tr>
								<tr>
								<td class="city-txt"><span class="require-field">*</span><span class="txt-r">City</span></td>
								<td><input type="text" value="America" id="sign_building_2" class="input-txt" name="sign_building"></td>
								<td class="state-txt"><span class="require-field">*</span><span class="txt-r">State</span></td>
								<td><input type="text" value="FeiSiZhou" id="best_time_2" class="input-txt" name="best_time"></td>
								</tr>
								<tr>
								<td class="address-txt"><span class="require-field">*</span><span class="txt-r">Address</span></td>
								<td colspan="3"><input type="text" value="America FeiSiZhou" class="input-full" name="address"></td>
								</tr>
								<tr>
								<td class="phone-txt"><span class="require-field">*</span><span class="txt-r">Telephone</span></td>
								<td colspan="3"><input type="text" value="2142323232" class="input-full" id="mobile_2" name="tel">
								<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
								</td>
								</tr>
								<tr>
								<td></td>
								<td colspan="3" class="user-info-operate">
										<a onclick="return cancel_edit_address(188)" class="type_back" href="#">Back</a>
								<input type="submit" value="Save Address" class="btn-submit" name="submit">
										<input type="hidden" value="act_edit_address" name="act">
								<input type="hidden" value="188" name="address_id"> 
								</td></tr>
							</tbody></table>
						</form>
						<div id="Account-shippingInfo_188" class="Account-shippingInfo">
							<ul class="clearfix">
								<li><label>
									<span>makei</span><span class="shippingInfo-1"> li</span><br>
									<span>America FeiSiZhou</span><br>
									<span>America, </span><span>FeiSiZhou, </span><span>4324234</span><br>
									<span>Austria</span><br><span>T: 2142323232</span><br>
									</label>
									<p>
										<input type="button" value="Change Shipping Address" onclick="return edit_user_addresss(188)" class="mod_modify_change">
										<input type="button" value="Delete" class="btn-delete" onclick="if (confirm('Are you sure delete the place of receipt?'))location.href='user.php?act=drop_consignee&amp;id=188'" name="button">
									</p>
								</li>
							</ul>    
						</div>

						<form id="form-checkConsignee-user_" style="display:none;" class="form-checkConsignee-user" onsubmit="return checkConsignee(this)" name="theForm" method="post" action="user.php" target="hidden_frame">
							<table class="usereditinfo">
								<tbody><tr>
								<td class="first-txt"><span class="require-field">*</span><span class="txt-r">First Name</span></td>
								<td class="first-txt"><input type="text" placeholder="First Name" value="" id="first_name_3" class="input-txt" name="first_name"></td>
								<td class="last-name"><span class="require-field">*</span><span class="txt-r">Last Name</span></td>
								<td class="last-name"><div class="last-txt"><input type="text" placeholder="Last Name" value="" id="last_name_3" class="input-txt" name="last_name"></div></td>
								</tr>
								<tr>
								<td class="email-txt"><span class="require-field">*</span><span class="txt-r">Email Address</span></td>
								<td colspan="3"><input type="text" value="makeli@gmail.com" class="input-full" name="email"></td>
								</tr>
								<tr>
								<td class="country-txt"><span class="require-field">*</span><span class="txt-r">Country</span></td>
								<td>
								<select name="country">
									<option value="14">Algeria</option>
									<option value="3">Australia</option>
									<option selected="" value="2">United Kingdom</option>
									<option value="1">United States of America</option>
								</select>
								</td>
								<td class="postal-txt"><span class="require-field">*</span><span class="txt-r">Zip Code</span></td>
								<td><input type="text" value="" id="zipcode_3" class="input-txt" name="zipcode"></td>
								</tr>
								<tr>
								<td class="city-txt"><span class="require-field">*</span><span class="txt-r">City</span></td>
								<td><input type="text" value="" id="sign_building_3" class="input-txt" name="sign_building"></td>
								<td class="state-txt"><span class="require-field">*</span><span class="txt-r">State</span></td>
								<td><input type="text" value="" id="best_time_3" class="input-txt" name="best_time"></td>
								</tr>
								<tr>
								<td class="address-txt"><span class="require-field">*</span><span class="txt-r">Address</span></td>
								<td colspan="3"><input type="text" value="" class="input-full" name="address"></td>
								</tr>
								<tr>
								<td class="phone-txt"><span class="require-field">*</span><span class="txt-r">Telephone</span></td>
								<td colspan="3"><input type="text" value="" class="input-full" id="mobile_3" name="tel">
								<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
								</td>
								</tr>
								<tr>
								<td></td>
								<td colspan="3" class="user-info-operate">
										<input type="submit" value="Submit" class="btn-edit" name="submit">
										<input type="hidden" value="act_edit_address" name="act">
								<input type="hidden" value="" name="address_id"> 
								</td></tr>
							</tbody></table>
						</form>
					<input type="button" onclick="document.getElementById('form-checkConsignee-user_').style.display = 'block';this.style.display='none';return false;" value="ADD NEW ADDRESS" class="modify_add_new" id="add_address_btn">
					<script type="text/javascript">
						function edit_user_addresss(address_id){
							var divs = Sizzle('.Account-shippingInfo');
							var forms = Sizzle('.form-checkConsignee-user');
							for(var i = 0; i < divs.length; i++){
								divs[i].style.display = 'none';
							}
							for(var i = 0; i < forms.length; i++){
								forms[i].style.display = 'none';
							}
							document.getElementById('add_address_btn').style.display = 'none';
							document.getElementById('form-checkConsignee-user_'+address_id).style.display = 'block';
							return false;
						}
						function cancel_edit_address(address_id){
							/*if(address_id){
								document.getElementById('Account-shippingInfo_'+address_id).style.display = 'block';
								document.getElementById('form-checkConsignee-user_'+address_id).style.display = 'none';
							} else {
								document.getElementById('add_address_btn').style.display = 'block';
								document.getElementById('form-checkConsignee-user_').style.display = 'none';
							}*/
							var divs = Sizzle('.Account-shippingInfo');
							var forms = Sizzle('.form-checkConsignee-user');
							for(var i = 0; i< forms.length; i++){
								forms[i].style.display = 'none';
							}
							for(var i = 0; i < divs.length; i++){
								divs[i].style.display = 'block';
							}
							document.getElementById('add_address_btn').style.display = 'block';
							return false;
						}
					</script>
					<iframe style="display:none" name="hidden_frame"></iframe>
				</div>
			</div>
                </div>
				<!-- user-bonus-list mod-block end-->
				
			<form class="form-page" method="get" action="/user.php" name="selectPageForm">
				<div class="mod-page">
					<div class="nav-page">
						<ul class="list-page-nub"></ul>
					</div>
					<div class="mod-page-total">Total <span>1</span>  records</div>
				</div>
			</form>
			<script type="text/javascript">
				function selectPage(sel)
				{
				sel.form.submit();
				}
			</script>
			<script type="text/javascript">
				var from_order_empty = "Please select secondary orders you want to combine.";
				var to_order_empty = "Please select the first order you want to combine.";
				var order_same = "The first order same with secondary order, please select again.";
				var confirm_merge = "Are you sure to merge the two orders?";
			</script>
         </div>
		<!-- layer_col-1 end-->
		
	</div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->

<include file="Common:footer" />  

<script type="text/javascript">
var msg_title_empty = "Title message is blank.";
var msg_content_empty = "Message content is blank.";
var msg_title_limit = "Message title should not exceed 200 charaters";
</script>
</body>
</html>