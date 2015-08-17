<header class="part_header" id="back-top">
  <div class="h-userandcart">
	<div class="container">
	  <div class="cheader-currency hidden-xs">
		<div class="header-currency-info"><span class="flag_currency_USD">USD</span></div>
		<ul class="header-currency-list">
			<li><a href="#" onclick="Change_currency('USD');" title="USD" rel="nofollow" class="flag_currency_USD">USD</a></li>
		  <li><a href="#" onclick="Change_currency('EUR');" title="EUR" rel="nofollow" class="flag_currency_EUR">EUR</a></li>
		  <li><a href="#" onclick="Change_currency('CAD');" title="CAD" rel="nofollow" class="flag_currency_CAD">CAD</a></li>
		  <li><a href="#" onclick="Change_currency('AUD');" title="AUD" rel="nofollow" class="flag_currency_AUD">AUD</a></li>
		</ul>
	  </div>
	  <!-- cheader-currency end-->

	  <span class="h-contact hidden-xs"><em></em>service@amoretu.com</span>
	  <div class="topUser">
		<span class="hidden-xs"> | </span><a href="https://www.amoretu.com/user.php" rel="nofollow" title="My Account" class="header-login"><em></em>Login/Register</a>
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

<div class="h-main-wapper">
  <div class="container">
	<div class="mod-logo"><a href=""><img src="__CSS__/img/logo.png" alt="AMORETU" width="270" height="30" /></a></div>
	<script type="text/javascript">
		var process_request = "Please waiting...";
	</script>
	
	{:W('Common/Menu')} 


	<script type="text/javascript">
	function show_child(elem){
		var uls = Sizzle('ul.item_navup');
		for(var i = 0; i < uls.length; i++){
			uls[i].style.display = 'none';
		}
		Sizzle('ul',elem)[0].style.display = 'block';
		var offset = getPosition(elem).y - getPosition(elem.parentNode).y;
		Sizzle('ul',elem)[0].style.top = '-' + offset + 'px';
		if(Sizzle('ul',elem)[0].clientHeight > elem.parentNode.clientHeight){
			elem.parentNode.style.height = Sizzle('ul',elem)[0].clientHeight + 'px';
		} else {
			Sizzle('ul',elem)[0].style.height = elem.parentNode.clientHeight + 'px';
		}
		Sizzle('.nav-category-banner',elem.parentNode.parentNode)[0].className = 'nav-category-banner hidden-mid';
		var selected = Sizzle('.selected',elem.parentNode);
		for(var i = 0; i < selected.length; i++){
			addClass(selected[i],'disable_select');
		}
		//console.log('show_child');
	}
	function getPosition(element) {
		var xPosition = 0;
		var yPosition = 0;
	  
		while(element) {
			xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
			yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
			element = element.offsetParent;
		}
		return {x: xPosition, y: yPosition};
	}
	function set_wide(){
		var divs = Sizzle('div.nav-category-banner');
		for(var i = 0; i < divs.length; i++){
			divs[i].className = 'hidden-mid nav-category-banner wide';
		}
		var uls = Sizzle('ul.item_navup');
		for(var i = 0; i < uls.length; i++){
			uls[i].style.display = 'none';
		}
		//console.log('set_wide');
	}
	function hide_child(elem){
		var selected = Sizzle('.selected',elem.parentNode);
		for(var i = 0; i < selected.length; i++){
			addClass(selected[i],'disable_select');
		}
		set_wide();
		//console.log('hide_child');
	}
	function set_nav_pos(elem){
		var chlid = Sizzle('.navup',elem);
		chlid[0].style.left = (getPosition(Sizzle('.list_nav')[1]).x - getPosition(elem).x) + 'px'
		var selected = Sizzle('.disable_select',elem);
		for(var i = 0; i < selected.length; i++){
			removeClass(selected[i],'disable_select');
		}
	}
	function change_nav_pic(elem,index){
		var parent = elem.parentNode.parentNode;
		var divs = Sizzle('.offer_con',parent);
		for(var i = 0; i < divs.length; i++){
			removeClass(divs[i],'selected');
		}
		addClass(divs[index],'selected');
		var spans = Sizzle('span',elem.parentNode);
		for(var i = 0; i < spans.length; i++){
			removeClass(spans[i],'selected');
		}
		addClass(elem,'selected');
	}
	function set_selected_display(elem){
		var li = Sizzle('.selected',elem)[0];
		var div = Sizzle('.navup',elem)[0];
		Sizzle('.item_navup',li)[0].style.display = 'block';
		if(Sizzle('ul',li)[0].clientHeight > div.clientHeight){
			div.style.height = Sizzle('ul',elem)[0].clientHeight + 'px';
		} else {
			Sizzle('ul',li)[0].style.height = div.clientHeight + 'px';
		}
		var offset = getPosition(li).y - getPosition(div).y;
		Sizzle('ul',li)[0].style.top = '-' + offset + 'px';
		Sizzle('.nav-category-banner',elem)[0].className = 'nav-category-banner hidden-mid';
	}
</script>

	<div class="header-R">
	  <script type="text/javascript">
		function checkSearchForm() 
		{
			  var str = document.getElementById('keyword').value;
			if(str) {
				location.href='https://www.amoretu.com/search.php?keywords='+str.replace(/[\s|\/]/g,'+');
				return false;
			} else {
				alert("Please entry the keywords!");
				return false;
			}
		}
		   window.defaultValue = 'Search...';
	  </script>

	<div class="h-search">
		<div class="mod-search">
		  <form id="searchForm" name="searchForm" method="get" action="https://www.amoretu.com/search.php" onSubmit="return checkSearchForm()" class="form-search">
			<label for="keyword"> </label>
			<span class="input-txt"><input name="keywords" type="text" id="keyword" value="" onFocus="this.value=''" onBlur="if(!this.value){this.value=window.defaultValue;}"/></span>
			<input type="submit" value="Go" class="btn-search" />
		  </form>
		</div>
	</div>
	<!-- h-search end -->

  <script type="text/javascript">
	keyword = document.getElementById('keyword');
	if(keyword && !keyword.value){
		keyword.value = window.defaultValue;
	}
  </script>
</div>
<!-- header-R end-->

	<div class="nav_delivery clearfix">
	  <p class="delivery_L"><span><em></em>FREE SHIPPING ON ALL ORDERS</span></p>
	  <p class="delivery_M"><span><em></em>REGISTER FOR FREE <b>£3 CASH</b></span></p>
	  <p class="delivery_R"><span><em></em>FREE EXCHANGE &amp; RETURN IN <b>60 DAYS</b></span></p>
	</div>
</div>
<!-- container end-->
</div>
<!-- h-main-wapper end-->
	
</header>
<!-- header end -->