<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login & Register</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/utils.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
	<include file="Common:header" />

    <div class="part_container container">
        <div class="part_col-4">
			<div class="user-login mod-block">
				<div class="mod-blank">
				<form name="formLogin" id="formLogin" method="post" class="form-login-user">
				<div class="sign-title">Login</div>
				<table>
					<div id="login_error_show" style="display:none;"></div>
					<tr>
					   <td><span class="user-tdTitle">Username <span id="login_username_notice"></span></span>
						<span class="input-txt"><input name="user_name" id="login_username" type="text" placeholder="Please enter the email address." size="25" /></span>
					 </td>
					</tr>
					 
					<tr>
					  <td>
						<span class="user-tdTitle">Enter Password <span id="login_password_notice"></span></span>
					  <span class="input-txt"><input name="password" id="login_password" type="password" size="15" /></span> 
					  </td>
					</tr>
					
				</table>
				<div class="user-login-opearte">
					<input class="ckb" type="checkbox" name="remember" value="1" checked="checked"> Stay signed in
					<br>
					<a href="{:U('admin/forgotpassword')}" title="Forgot Password" class="passworld_Fine">Forgot Password</a> 
					<input type="hidden" name="back_act" value="" />
					<input type="button" id="login_btn" class="btn-submit" value="sign in" />
				</div>
				</form>
				
				<form action="" name="formRegister" id="formRegister" class="form-user-register">
					<div class="sign-title">Create An Account</div>
					<span style="color:red" id="register_error"></span>
					  <table>
						<tr>
						  <td>
						  <span class="user-tdTitle">Username <span id="username_notice" class="block-notice-user"></span></span>
						  <span class="input-txt"><input name="user_name" type="text" size="25" id="user_name" placeholder="Please enter the email address." /></span>
						   
						  </td>
						</tr>
						<tr>
						  <td>
						  <span class="user-tdTitle">Enter Password <span class="block-notice-user" id="password_notice"></span></span>
						  <span class="input-txt"><input name="password" type="password" id="password1" /></span>
						  </td>
						</tr>
						<tr>
						  <td>
						  <span class="user-tdTitle">Confirm Password<span class="block-notice-user" id="conform_password_notice"></span></span>
						  <span class="input-txt"><input name="confirm_password" type="password" id="conform_password" /></span>
						  </td>
						</tr>
					  </table>
					  <input type="hidden" name="back_act" value="" /><br />
					  <input name="Submit" type="button" id="sign_up" value="sign up" class="btn-submit">
				</form>
   
				</div>
				<!-- mod-blank end-->
			</div>
			<!-- user-login end-->		                    
        </div>
		<!-- part_col-4 end-->
		
    </div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->
 
<include file="Common:footer" /> 
 
<script type="text/javascript"> 
	var process_request = "Please waiting...";
	var username_empty = "Please enter email address.";
	var username_shorter = "Email address length can\'t less than 3 characters.";
	var username_invalid = "Email address only can be composed of letters, figure and underline.";
	var password_empty = "(Please input password)";
	var password_need = "(6-20 characters must be needed)";
	var password_shorter = "(6-20 characters must be needed)";
	var confirm_password_invalid = "(Password Not Match)";
	var email_empty = "Email can\'t be blank.";
	var email_invalid = "(Invalid Email Address!)";
	var agreement = "You do not agree with the agreement";
	var msn_invalid = "msn address is invalid";
	var qq_invalid = "QQ number is invalid";
	var home_phone_invalid = "Home phone No. is invalid";
	var office_phone_invalid = "Office phone No. is invalid";
	var mobile_phone_invalid = "Mobile No. is invalid";
	var msg_un_blank = "Email is blank";
	var msg_un_length = "Email should not exceed 7 Chinese characters";
	var msg_un_format = "Email contain invalid characters";
	var msg_un_registered = "Email exists, please enter again";
	var msg_can_rg = "You can register";
	var msg_email_blank = "(Please input Email Address)";
	var msg_email_registered = "Email Address is already registered, please login!";
	var msg_email_format = "(Invalid Email Address!)";
	var username_exist = "Email Address is already registered, please login!";
</script> 
 
<script type="text/javascript" src="__JS__/register.js"></script>

</body>
</html>