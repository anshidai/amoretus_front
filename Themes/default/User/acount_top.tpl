<div class="acount-top-top clearfix">
	<div class="member-image">
		<div class="member-photo-container"> <img width="90" height="90" src=""> </div>
		<div class="member-meeting">
			<p class="hello"><strong>Hi!<br><php> echo session('user_name');</php></strong></p>
		</div>
	</div>
	<div class="acount-top-right">
		<ul>
			<li class="acount-top-1"><a title="my coupons" href="javascript:;"><span>MY COUPONS</span>{$info.coupons_total}</a></li>
			<li class="acount-top-2"><a title="my WISH LIST" href="/?s=collect/index"><span>MY WISH LIST</span>{$info.collect_total}</a></li>  
			<li class="acount-top-3-1"><a title="my orders" href="/?s=order/index"><em></em>MY ORDERS</a></li>          
		</ul>
	</div>
</div>                
<!-- acount-top-top end-->  