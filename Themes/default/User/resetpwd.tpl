<!DOCTYPE html> 
<html lang="en"> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Order</title>
<link href="__CSS__/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="__JS__/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="__JS__/common.js"></script>
<script type="text/javascript" src="__JS__/user.js"></script>
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

				<form id="form-user-resetPassword" class="form-user-resetPassword" name="formPassword">
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
					  <td>
					  <span class="input-txt"><input type="password" size="25" name="comfirm_password"></span>
					  </td>
					</tr>
				  </tbody></table>
				</form>
				<div class="user-info-operate"><input type="button" class="btn-submit resetpassword_btn" value="Submit"></div>
				<p id="changed_ok" class="changed_ok"></p>  
				</div>
			</div>
			<!-- user-profile mod-block end-->
         </div>
		<!-- layer_col-1 end-->
		
	</div>
	<!-- part_container container end-->

</div>
<!-- part_main end-->

<include file="Common:footer" />   

</body>
</html>