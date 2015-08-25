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
								<a href="/?=order/view&order_id={$vo.order_id}">View Order</a>
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

			<form class="form-page" method="get" action="/user.php" name="selectPageForm">
				<div class="mod-page">
					<div class="nav-page">
						<ul class="list-page-nub"></ul>
					</div>
					<div class="mod-page-total">{$show}</div>
				</div>
			</form>
			<script type="text/Javascript">
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

</body>
</html>