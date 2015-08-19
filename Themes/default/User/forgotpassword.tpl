<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Forgot Password</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/utils.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
	<include file="Common:header" />
    
	<div class="part_container container">
		<div class="part_col-4">
			<script type="text/javascript">
				var user_name_empty = "Please enter your Email!";
				var email_address_empty = "Please enter your email address!";
				var email_address_error = "Please enter a valid email address!";
				var new_password_empty = "Please enter a new password!";
				var confirm_password_empty = "Re-enter the password!";
				var both_password_error = "The two passwords you entered did not match. Please type it again!";
			</script>
	
			<div class="user-forgotPassword mod-block">
				<div class="mod-title">FORGOT YOUR PASSWORD?<span></span></div>
				<p>Please enter the email address you registed and a new password will sent to your Email Address.</p>
				<div id="notice_show"></div>
				<div class="mod-blank">
					<form class="form-user-forgotPassword" name="getPassword" id="formforgotPassword">
						<table>
						<tbody><tr>
						<td>
							<span class="user-tdTitle fe">Email</span>
							<span id="email_notice"></span><br>
							<span class="input-txt"><input type="text" size="30" name="email"></span>
							</td>
						</tr>
						<tr>
						<td>
							<span class="user-tdTitle fe">Confirm Email</span>
							<span id="confirm_email_notice" style="color:#f00;"></span><br>
							<span class="input-txt"><input type="text" size="30" name="confirm_email"></span>
							</td>
						</tr>
						</tbody>
						</table>
					<div class="user-forgotPassword-opearte">
						<input type="button" id="forgotpwd_btn"" class="btn-submit" value="Submit" name="submit">
						<p><a href="{:U('admin/login')}">Return to Sign in</a></p>
						<p><a href="{:U('admin/login')}">Create a New Account</a></p>
					</div>
					</form>
				</div>
				<!-- mod-blank end-->
			</div>   
			<!-- user-forgotPassword mod-block end-->
			
		</div>
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