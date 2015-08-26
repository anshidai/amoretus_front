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
			
			<div class="user-order-item mod-block">
				<div class="mod-title">Order Number : {$info.order_sn}</div>
				
				<div class="mod-blank">
					<table>
					<tbody>
						<tr>
							<th style="text-align:left;">Item Information</th>
							<th style="text-align:left;">Attribute</th>
							<th>Item Price</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
						<notempty name="info.goods_list">
						<foreach name="info.goods_list" item="vo">
						<tr>
							<td style="text-align:left;">
							<a class="order_f6" target="_blank" href="{$vo.url}"><img title="{$vo.goods_name}" src="{$vo.goods_thumb}">{$vo.goods_name}</a>
							</td>
							<td>{$vo.goods_attr}</td>
							<td align="center">${$vo.goods_price}</td>      
							<td align="center">{$vo.goods_number}</td>
							<td align="center" class="user-item-price"><b>${$vo.total_price}</b></td>
						</tr>
						</foreach>
						<tr>
							<td align="right" class="fok" colspan="5">Total: ${$info.goods_amount}</td>
						</tr>
						<tr>
							<td align="right" class="fok" colspan="5">
							<br>
								Total price: $ {$info.goods_amount} + Shipping fee: $ {$info.shipping_fee} + Poundage: $ {$info.pay_fee}<br>
								Payable money: $ {$info.order_amount}
							</td>
						</tr>
						</notempty>
						
					</tbody></table>
				</div>
			</div>
			<!-- user-order-item mod-block end-->

			<div class="user-order-consigneesInfo mod-block">
				<div class="mod-title">Address</div>
				<div class="mod-blank">
					<div class="Billing_address_update">
						{$info.order_addres}
					</div>
					<div class="doPay">
					<div class="re_Pay">
						<if condition="$info.pay_status lt 2">
					
						<form action="https://ssl.nowipay.com:8443/pay" method="post" style="text-align:center;" name="doPay">
							<input type="hidden" value="M0000002" name="merNo">
							<input type="hidden" value="0344705803811358" name="orderNo">
							<input type="hidden" value="https://www.amoretu.com/respond.php?code=tby2" name="returnURL">
							<input type="hidden" value="44.02" name="amount">
							<input type="hidden" value="USD" name="currency">
							<input type="hidden" value="1" name="productType">
							<input type="hidden" value="Sexy Lingerie &amp; Swimwear, Sexy Hosiery Sale in UK | Amoretu.com" name="shopName">
							<input type="hidden" value="Sheer Luring Lace Trim Babydoll,Sheer Lace Back Women Nightwear" name="goodsName">
							<input type="hidden" value="1,1" name="goodsNumber">
							<input type="hidden" value="17.95,12.95" name="goodsPrice">
							<input type="hidden" value="makei" name="billFirstName">
							<input type="hidden" value="makei" name="shipFirstName">
							<input type="hidden" value="li" name="billLastName">
							<input type="hidden" value="li" name="shipLastName">
							<input type="hidden" value="America FeiSiZhou" name="billAddress">
							<input type="hidden" value="America FeiSiZhou" name="shipAddress">
							<input type="hidden" value="America" name="billCity">
							<input type="hidden" value="America" name="shipCity">
							<input type="hidden" value="FeiSiZhou" name="billState">
							<input type="hidden" value="FeiSiZhou" name="shipState">
							<input type="hidden" value="AT" name="billCountry">
							<input type="hidden" value="AT" name="shipCountry">
							<input type="hidden" value="4324234" name="billZipCode">
							<input type="hidden" value="4324234" name="shipZipCode">
							<input type="hidden" value="makeli@gmail.com" name="email">
							<input type="hidden" value="2142323232" name="phone">
							<input type="hidden" value="" name="remark">
							<input type="hidden" value="zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3" name="acceptLanguage">
							<input type="hidden" value="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:39.0) Gecko/20100101 Firefox/39.0" name="userAgent">
							<input type="hidden" value="www.amoretu.com" name="referer">
							<input type="hidden" value="114.252.152.33" name="clientIp">
							<input type="hidden" value="en" name="language">
							<input type="hidden" value="d1917a59082000e0ddd746c274577d0f" name="md5Info">
							<input type="submit" class="pay_button" value="pay now" name="b1" alt="submit">
						</form>
						</if>
					</div>
					<a class="type_back" href="/?s=order/index">Back</a>
					<br class="clear">
					</div>
				</div>
				<!-- mod-blank end-->
			</div>
			<!-- user-order-consigneesInfo mod-block end-->
  
        </div>
		<!-- layer_col-1 end-->
	</div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->

<include file="Common:footer" />   

</body>
</html>