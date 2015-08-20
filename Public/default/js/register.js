
$(function(){
	
	$('#login_username').blur(function(){
		var username = $(this).val();
		if(username.length == 0) {
			$('#login_username_notice').html('<br>'+username_empty);
		}else if(!Utils.isEmail(username)) {
			$('#login_username_notice').html('<br>'+username_invalid);
		}else {
			$('#login_username_notice').html('');
		}
	});
	
	$('#login_password').blur(function(){
		var password = $(this).val();
		if(password.length >= 6 && password.length <= 20) {
			$('#login_password_notice').html('');
		}else if(password.length == 0) {
			$('#login_password_notice').html('<br>'+password_empty);
		}else {
			$('#login_password_notice').html('<br>'+password_need);
		}
	});
	
	$('#login_btn').click(function(){
		
		var frm = document.forms['formLogin'];
		var username = Utils.trim(frm.elements['username'].value);
		var password = Utils.trim(frm.elements['password'].value);
		var msg = '';
		var back = frm.elements['back_act'].value;
		
		var halt = true;
		
		if(username.length == 0) {
			$('#login_username_notice').html('<br>'+username_empty);
			halt = false;
		}
		else if(!Utils.isEmail(username)) {
			$('#login_username_notice').html('<br>'+username_invalid);
			halt = false;
		}
		if(password.length == 0) {
			$('#login_password_notice').html('<br>'+password_empty);
			halt = false;
		}
		if(!halt) return false;
		
		$.post('/index.php?c=admin&a=login', $('#formLogin').serialize()).success(function(data){
			console.log(data)
			if(data.status == 0) {
				$('#login_error_show').html(data.info).show(300).delay(3000).hide(300);
			}
		});
		
		
	});
	
	$('#sign_up').click(function(){
		var frm = document.forms['formRegister'];
		var username  = Utils.trim(frm.elements['username'].value);
		var password  = Utils.trim(frm.elements['password'].value);
		var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
		
		var halt = true;
		
		if(username.length == 0) {
			$('#username_notice').html('<br>'+username_empty);
			halt = false;
		}else if(!(Utils.isEmail(username))) {
			$('#username_notice').html('<br>'+email_invalid);
			halt = false;
		}
		if(password.length == 0) {
			$('#password_notice').html('<br>'+password_empty);
			halt = false;
		}else if(password.length < 6) {
			$('#password_notice').html('<br>'+password_shorter);
			halt = false;
		}
		if(confirm_password != password) {
			$('#conform_password_notice').html('<br>'+confirm_password_invalid);
			halt = false;
		}
		if(!halt) return false;
		
	});
	
	$('#forgotpwd_btn').click(function(){
		var frm = document.forms['formforgotPassword'];
		var email = Utils.trim(frm.elements['email'].value);
		var confirm_email = Utils.trim(frm.elements['confirm_email'].value);
		
		var halt = true;
		
		if(email.length == 0) {
			$('#email_notice').html('<br>'+email_address_empty);
			halt = false;
		}else if(!(Utils.isEmail(email))) {
			$('#username_notice').html('<br>'+email_address_error);
			halt = false;
		}
		
		if(confirm_email.length == 0) {
			$('#confirm_email_notice').html('<br>'+email_address_empty);
			halt = false;
		}else if(email != confirm_email) {
			$('#confirm_email_notice').html('<br>'+both_password_error);
			halt = false;
		}
		
		if(!halt) return false;
		
	});
	
	
	
});
