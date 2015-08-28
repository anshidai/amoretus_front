<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
    
	<include file="Common:header" />

	<div class="part_container container">
		<include file="User:left_menu" />
        
		<div class="layer_col-1">
			{:W('Common/UserAcountTop')}                                 
                                
			<div class="user-order-list mod-block">
				<div class="mod-title">My Order</div>
				<div class="mod-blank">
					<table>
					  <tbody><tr>
						<th>ORDER</th>
						<th>DATE</th>
						<th>TRACKING NUMBER</th>
						<th>ORDER STATUS</th>
						<th>ORDER TOTAL</th>
						<th>&nbsp;</th>
					  </tr>
						<notempty name="list">
						<foreach name="list" item="vo">
						<tr>
							<td class="order-id">{$vo.order_sn}</td>
							<td class="order-time">{$vo.add_time|date="m/d/Y H:i:s", ###}</td>
							<td class="order-teacking-number"></td>
							<td class="order_item-status">
								<span class="Processing">
									<?php if($vo['order_status'] == 0){
										echo $vo['status']['order_tips'];
									} 
									else {
										echo $vo['status']['order_tips']. '; '. $vo['status']['pay_tips']. '; '. $vo['status']['shipping_tips'];
									}?>
								</span>
							</td>
							<td class="order_amount">${$vo.order_amount}</td>
							<td>
								<a href="/?s=order/detail&order_id={$vo.order_id}">View Order</a>
								<if condition="$vo.order_status eq 0">
								| <a class="confirm ajax-get" href="/?s=order/delete&order_id={$vo.order_id}">Remove</a>
								</if>
							</td>
					  </tr>
					  </foreach>
					  </notempty>
					</tbody>
					</table>
				</div>
				<!-- mod-blank end-->
				
			</div>
			<!-- user-order-list mod-block end-->
         </div>
		<!-- layer_col-1 end-->
		
	</div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->

<include file="Common:footer" />  

</body>
</html>