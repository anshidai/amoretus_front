<div class="nav-main hidden-xs">
	<ul class="list-nav-main">
		<li class="list_nav navhome"><a href="" class="submenu">Home</a></li>
		
		<notempty name="categories">
		<foreach name="categories" item="vo" key="k">
		<li class="list_nav list_nav_{$k+1}">
			<a class="submenu"  href="{$vo.url}" >{$vo.name}</a>
			<div class="navup clearfix">
				<ul class="headers_navup">
					<notempty name="vo.childs">
					<foreach name="vo.childs" item="childs" >
					<li><a href="{$childs.url}">{$childs.name}</a></li>
					</foreach>
					</notempty>
				</ul>
				<!-- headers_navup end-->
			</div>
			<!-- navup end-->
		</li>
		</foreach>
		</notempty>
</ul>
<!-- list-nav-main end--> 

</div>
<!-- nav-main end -->