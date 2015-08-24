<div class="h-userandcart">
	<div class="container">

	  <span class="h-contact hidden-xs"><em></em>service@amoretus.com</span>
	  <div class="topUser">
		<php> if(!session('user_id')) {</php>
		<a href="/index.php?s=/admin/login" rel="nofollow" title="My Account" class="header-login"><em></em>Login/Register</a>
		<php> }else {</php>
		<a class="header-login" title="My Account" rel="nofollow" href="/index.php?s=/user/index"><em></em><php> echo session('user_name');</php></a>
		<span> | </span>
		<a title="Logout" rel="nofollow" href="/index.php?s=/user/loginout">Logout</a>
		<php> }</php>
		<span> | </span>
		<a href="user.php?act=collection_list" class="header_wishlist hidden-xs" rel="nofollow" title="Wish List"><em></em>Wish List<span id="header_wish_count">0</span></a>
		<span class="hidden-xs"> | </span>
	  </div>
	  <!-- topUser end-->

	  <div class="mod-shoppingCart">
		<div class="carttitle" id="topcart">
		  <div class="cart_count"><a id="ajax_count" href="https://www.amoretu.com/flow.php" rel="nofollow">My Bag<span>0</span></a></div>
			<div id="ajax_cart" style="width: 300px;" class="hidden-xs"><p class="empty">Your Shopping Bag is empty.</p></div>
		</div>
		<!-- carttitle end-->
	  </div>
	  <!-- mod-shoppingCart end-->   

	</div>
	<!-- container end-->
  </div>
  <!-- h-userandcart end-->