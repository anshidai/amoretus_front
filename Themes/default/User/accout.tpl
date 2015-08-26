<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/users.js"></script>
</head>
<body class="layer-user">
<div class="part_main">
    
	<include file="Common:header" />

	<div class="part_container container">
		<include file="User:left_menu" />
        
		<div class="layer_col-1">
			{:W('Common/UserAcountTop')}                                     
                                
			<div class="user-profile mod-block">
				<div class="mod-title">Account Information<span></span></div>
				<div class="info_message" id="notice_show"></div>
				<div class="mod-blank">
				<form id="form-user-info" class="form-user-info" action="/?s=profile/accout" name="formEdit">
				<table>
					<tbody><tr>
					  <th>Email Address:</th>
					  <td><span class="input-txt"><input type="text" size="25" value="makeli@gmail.com" name="email"></span></td>
					</tr>
					<tr>
					  <th>First name:</th>
					  <td><span class="input-txt"><input type="text" value="" name="first_name"></span>
					  </td>
					</tr>
					<tr>
					  <th>Last name:</th>
					  <td><span class="input-txt"><input type="text" value="" name="last_name"></span>
					  </td>
					</tr>
					<tr style="display:none;">
					  <th>MSN:</th>
					  <td><span class="input-txt"><input type="text" value="" name="other[msn]"></span>
					  </td>
					</tr>
					<tr style="display:none;">
					  <th>Office phone:</th>
					  <td><span class="input-txt"><input type="text" value="" name="other[office_phone]"></span>
					  </td>
					</tr>
					<tr style="display:none;">
					  <th>Home phone:</th>
					  <td><span class="input-txt"><input type="text" value="" name="other[home_phone]"></span>
					  </td>
					</tr>
					<tr style="display:none;">
					  <th>Mobile phone:</th>
					  <td><span class="input-txt"><input type="text" value="" name="other[mobile_phone]"></span>
					  </td>
					</tr>
					<tr>
					  <td colspan="2"><label><input type="checkbox" onchange="var f = document.getElementById('form-user-resetPassword');f.style.display = this.checked?'block':'none';" value="" id="do_change_password" name=""><strong> Change Password</strong></label></td>
					</tr>
				</tbody></table>
				<input type="hidden" value="act_edit_profile" name="act">
				<!--div class="user-info-operate"><input type="submit" value="submit" class="btn-submit" /></div-->
				</form>
				
				<form style="display:none;" id="form-user-resetPassword" class="form-user-resetPassword" target="hiddenframe" method="post" action="user.php" name="formPassword">
				 <table>
					<tbody><tr>
					  <th>Current Password</th>
					  <td><span class="input-txt"><input type="password" size="25" name="old_password"></span></td>
					</tr>
					<tr>
					  <th>New password</th>
					  <td><span class="input-txt"><input type="password" size="25" name="new_password"></span></td>
					</tr>
					<tr>
					  <th>Confirm Password</th>
					  <td><span class="input-txt"><input type="password" size="25" name="comfirm_password"><input type="hidden" value="act_edit_password" name="act"></span></td>
					</tr>
				  </tbody></table>
				</form>
				<div class="user-info-operate"><input type="submit" onclick="all_submit();return false;" class="btn-submit" value="Submit"></div>
				<p id="changed_ok" class="changed_ok"></p>  
				</div>
			</div>
			<!-- user-profile mod-block end-->

			<script type="text/javascript">
			function all_submit()
			{
				if(document.getElementById('do_change_password').checked == true){
					document.getElementById('form-user-resetPassword').submit();
				} else {
					if(userEdit()){
						document.getElementById("form-user-info").submit();
					}
				}
			}
			</script>
         </div>
		<!-- layer_col-1 end-->
		
	</div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->

<include file="Common:footer" />   

</body>
</html>