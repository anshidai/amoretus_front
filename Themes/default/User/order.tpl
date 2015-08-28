<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
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
					<div class="order-sortfy">Show
						<select onchange="change_per_page(this)" name="">
							<option value="10" selected="">10</option>
							<option value="20">20</option>
							<option value="50">50</option>
						</select>
						 per page 
					</div>
					<script type="text/Javascript">
						function change_per_page(select)
						{
							var url = window.location.href.replace(/&amp;perpage=\d+/,'');
							url += '&amp;perpage='+select.value;
							window.location.href = url;
						}
					</script>
					<table>
					  <tbody><tr>
						<th>ORDER</th>
						<th>DATE</th>
						<th>TRACKING NUMBER</th>
						<th>ORDER STATUS</th>
						<th>SHIP TO</th>
						<th>ORDER TOTAL</th>
						<th>&nbsp;</th>
					  </tr>
							<tr>
						  <td class="order-id">0344705803811358</td>
						  <td class="order-time">08/15/2015</td>
						  <td class="order-teacking-number"></td>
						  <td class="order_item-status">
										<span class="Processing">Unshipped</span>
									  </td>
						  <td class="order-ship">makei li</td>
						  <td class="order_amount">$48.75</td>
						  <td>
										<span class="order_payment"><a href="flow.php?step=order_add_cart&amp;&amp;order_id=225">Pay Now</a> | </span>
										<a href="user.php?act=order_detail&amp;order_id=225">View Order</a> | 
							<a href="user.php?act=cancel_order&amp;order_id=225">Remove</a>
						  </td>
					  </tr>
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
					<div class="mod-page-total">Total <span>1</span>  records</div>
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

<script type="text/javascript">
var msg_title_empty = "Title message is blank.";
var msg_content_empty = "Message content is blank.";
var msg_title_limit = "Message title should not exceed 200 charaters";
</script>
</body>
</html>