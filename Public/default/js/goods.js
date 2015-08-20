
$(function(){
	
	$(".jqzoom").imagezoom();
	
	/*
	$("#thumblist li a").click(function() {
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src', $(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel', $(this).find("img").attr("big"));
	});
	*/
	
	$('#item-gallerys li').click(function(){
		var _this = $(this);
		_this.addClass("gallerys_curs").siblings().removeClass("gallerys_curs");
		$('.jqzoom').attr('src', _this.find('img').attr('mid'));
		$('.jqzoom').attr('rel', _this.find('img').attr('big'));
	});
});


function toggle_login_box(obj,e){
	var sfm = document.getElementById('Size');
	if(sfm.style.display == 'none'){
		sfm.style.display = 'block';
	} else {
		sfm.style.display = 'none';
	};
	cancel_event(e);
	document.body.parentNode.className += ' overlay_open';
	//document.body.parentNode.getElementsByTagName('html')[0].className = 'overlay_open';
}

function cancel_event(e){
	if (e && e.stopPropagation){
		e.stopPropagation();
	} else {
		window.event.cancelBubble=true;
	}
}
/* document.body.onclick = function(){
	document.getElementById('Size').style.display = 'none';
} */