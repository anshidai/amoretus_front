<!DOCTYPE html> 
<html> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
<script type="text/javascript" src="__JS__/sizzle.js"></script>
<script type="text/javascript" src="__JS__/address.js"></script>
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

						<input type="button" onclick="document.getElementById('form-checkConsignee-user').style.display = 'block';this.style.display='none';return false;" value="ADD NEW ADDRESS" class="modify_add_new" id="add_address_btn">
						<form name="theForm" class="form-checkConsignee-user" style="display: none;" id="form-checkConsignee-user">
							<table class="usereditinfo">
							<tbody>
							<tr>
								<td class="first-txt">
									<span class="require-field">*</span>
									<span class="txt-r">First Name</span
								</td>
								<td class="first-txt">
									<input name="first_name" type="text" class="input-txt" id="first_name" value="" placeholder="First Name">
								</td>
								<td class="last-name">
									<span class="require-field">*</span><span class="txt-r">Last Name</span>
								</td>
								<td class="last-name">
									<div class="last-txt">
										<input name="last_name" type="text" class="input-txt" id="last_name" value="" placeholder="Last Name">
									</div>
								</td>
							</tr>
							<tr>
								<td class="email-txt">
									<span class="require-field">*</span><span class="txt-r">Email Address</span>
								</td>
								<td colspan="3">
									<input name="email" type="text" class="input-full" value="{$user_info.email}">
								</td>
							</tr>
							<tr>
								<td class="country-txt">
									<span class="require-field">*</span>
									<span class="txt-r">Country</span>
								</td>
								<td>
									<select name="country">
										<option value="14">Algeria</option>
										<option value="3">Australia</option>
										<option value="13">Austria</option>
										<option value="4">Canada</option>
									</select>
								</td>
								<td class="postal-txt">
									<span class="require-field">*</span>
									<span class="txt-r">Province</span>
								</td>
								<td>
									<select name="province">
										<option value="14">Algeria</option>
										<option value="3">Australia</option>
										<option value="13">Austria</option>
										<option value="4">Canada</option>
									</select>
								</td>
							</tr>
							<tr>
								<td class="city-txt">
									<span class="require-field">*</span>
									<span class="txt-r">City</span>
								</td>
								<td>
									<input name="sign_building" type="text" class="input-txt" id="sign_building">
								</td>
								<td class="state-txt">
									<span class="require-field">*</span>
									<span class="txt-r">Zip Code</span>
								</td>
								<td>
									<input name="zipcode" type="text" class="input-txt" id="zipcode">
								</td>
							</tr>
							<tr>
								<td class="address-txt">
									<span class="require-field">*</span>
									<span class="txt-r">Address</span>
								</td>
								<td colspan="3">
									<input name="address" type="text" class="input-full">
								</td>
							</tr>

							<tr>
								<td class="phone-txt">
									<span class="require-field">*</span>
									<span class="txt-r">Telephone</span>
								</td>
								<td colspan="3">
									<input name="tel" type="text" id="mobile" class="input-full">
									<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
								</td>
							</tr>
							<tr>
								<td></td>
								<td class="user-info-operate" colspan="3">
									<input type="button" name="submit" class="address_btn btn-edit" value="Submit" onclick="addres_submit('form-checkConsignee-user')">
									<input name="address_id" type="hidden"> 
									<input type="hidden" value="add" name="act"> 
								</td>
							</tr>
							</tbody></table>
						</form>
						<br>
						
						<notempty name="list">
						<foreach name="list" item="vo" key="k">
						<form id="form-checkConsignee-user_{$vo.address_id}" style="display:none;" class="form-checkConsignee-user" name="theForm">
							<table class="usereditinfo">
								<tbody>
								<tr>
									<td class="first-txt">
										<span class="require-field">*</span><span class="txt-r">First Name</span>
									</td>
									<td class="first-txt">
										<input type="text" placeholder="First Name" value="{$vo.first_name}" id="first_name_{$k}" class="input-txt" name="first_name">
									</td>
									<td class="last-name">
										<span class="require-field">*</span><span class="txt-r">Last Name</span>
									</td>
									<td class="last-name">
										<div class="last-txt">
											<input type="text" placeholder="Last Name" value="{$vo.last_name}" id="last_name_{$k}" class="input-txt" name="last_name">
										</div>
									</td>
								</tr>
								<tr>
									<td class="email-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Email Address</span>
									</td>
									<td colspan="3">
										<input type="text" value="{$vo.email}" class="input-full" name="email">
									</td>
								</tr>
								<tr>
									<td class="country-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Country</span>
									</td>
									<td>
									<select name="country">
											<option value="14">Algeria</option>
											<option value="3">Australia</option>
											<option selected="" value="13">Austria</option>
											<option value="4">Canada</option>
											<option value="81">Denmark</option>
									  </select>
									</td>
									<td class="postal-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Province</span>
									</td>
									<td>
										<select name="province">
											<option value="14">Algeria</option>
											<option value="3">Australia</option>
											<option selected="" value="13">Austria</option>
											<option value="4">Canada</option>
											<option value="81">Denmark</option>
									  </select>
									</td>
								</tr>
								<tr>
									<td class="city-txt">
										<span class="require-field">*</span><span class="txt-r">City</span>
									</td>
									<td>
										<input type="text" value="America" id="sign_building_{$k}" class="input-txt" name="city">
									</td>
									<td class="state-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Zip Code</span>
									</td>
									<td>
										<input type="text" value="{$vo.zipcode}" id="zipcode_{$k}" class="input-txt" name="zipcode">
									</td>
								</tr>
								<tr>
									<td class="address-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Address</span>
									</td>
									<td colspan="3">
										<input type="text" value="America neai" class="input-full" name="address">
									</td>
								</tr>
								<tr>
									<td class="phone-txt">
										<span class="require-field">*</span>
										<span class="txt-r">Telephone</span>
									</td>
									<td colspan="3">
										<input type="text" value="{$vo.mobile}" class="input-full" id="mobile_{$k}" name="mobile">
										<p class="phone-notice">Only used if there are delivery issues. Never shared or sold</p>
									</td>
								</tr>
								<tr>
									<td></td>
									<td colspan="3" class="user-info-operate">
										<a class="type_back" href="javascript:;" onclick="return cancel_edit_address({$vo.address_id})">Back</a>
										<input type="button" value="Save Address" class="address_btn btn-submit" name="submit" onclick="addres_submit('form-checkConsignee-user_{$vo.address_id}')">
										<input type="hidden" value="{$vo.address_id}" name="address_id"> 
										<input type="hidden" value="edit" name="act"> 
									</td>
								</tr>
								</tbody>
							</table>
						</form>
						
						<div id="Account-shippingInfo_{$vo.address_id}" class="Account-shippingInfo">
							<ul class="clearfix">
								<li>
								<label>
									<span><strong>Consignee: </strong>{$vo.first_name}</span><span class="shippingInfo-1">{$vo.last_name}</span><br>
									<span><strong>Address: </strong>{$vo.address}</span><br>
									<span><strong>City: </strong>America, </span><span>neai, </span><br>
									<span><strong>Zip Code: </strong>{$vo.zipcode}</span><br>
									<span><strong>Telephone: </strong>{$vo.mobile}</span><br>
								</label>
									<p>
										<input type="button" value="Change Shipping Address" onclick="return edit_user_addresss({$vo.address_id})" class="mod_modify_change">
										<input type="button" value="Delete" class="btn-delete confirm" href="/?s=address/del&id={$vo.address_id}" name="button">
									</p>
								</li>
							</ul>    
						</div>
						</foreach>
						</notempty>

				</div>
				</div>
                </div>
				<!-- user-bonus-list mod-block end-->

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

</body>
</html>