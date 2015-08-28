$(function(){

	$('.loveit_icon').click(function(){
		$(this).siblings('.lovealert').toggle();
	});
	
	$('.sign-in-button').click(function(){
		var _this = $(this);
		
		var url  = '/?s=collect/delete&rec_id='+$(this).attr('rel');
		$.getJSON(url, function(data){
			if(data.status == 1) {
				_this.parent().parent().remove();
			}else {
				alert(data.info);
			}
		});
	});
	
	$('.resetpassword_btn').click(function(){
		$.post('/?s=profile/resetpwd', $('#form-user-resetPassword').serialize(), function(data){
			if(data.status == 0) {
				$('#notice_show').addClass('error').html(data.info).show(300).delay(2000).hide(300);
			}
			else if(data.status == 1) {
				$('#notice_show').removeClass('error').html(data.info).show(300).delay(2000).hide(300);
				setTimeout(function(){
					location.href = "/index.php?s=/user/loginout";
				}, 2000);
			}
		});
	});
	
	
	
});

function toggle_cart(elem){
	var checkout_cart_info = document.getElementById('checkout_cart_info');
	checkout_cart_info.style.display = checkout_cart_info.style.display == 'none' ? 'block':'none';
	if(hasClass(elem,'c_show')){
		removeClass(elem,'c_show');
	} else {
		addClass(elem,'c_show');
	}
}