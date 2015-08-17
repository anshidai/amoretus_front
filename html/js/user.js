/* $Id : user.js 4865 2007-01-31 14:04:10Z paulgao $ */

/* *
 * 修改会员信息
 */
function userEdit()
{
  var frm = document.forms['formEdit'];
  var email = frm.elements['email'].value;
  var msn = frm.elements['other[msn]'].value;
  var home_tel = frm.elements['other[home_phone]'].value;
  
  var msg = '';
  var reg = null;

  if (email.length == 0)
  {
    msg += '*'+email_empty + '<br />';
  }
  else
  {
    if ( ! (Utils.isEmail(email)))
    {
      msg += '*'+email_error + '<br />';
    }
  }
  
  // if(!Utils.isEmail(msn))
  // {
	// msg += '*MSN address is invalid <br />'; 
  // }
  // if(isNaN(home_tel))
  // {
	// msg += '*Home phone No. is invalid<br />'; 
  // }

  if (msg.length > 0)
  {
    //alert(msg);
	if(document.getElementById('notice_show').className.indexOf('error') == -1){
		document.getElementById('notice_show').className += ' error';
	}
	document.getElementById('notice_show').style.display="block";
	document.getElementById('notice_show').innerHTML=msg;
    return false;
  }
  else
  {
	document.getElementById('notice_show').style.display="none";	
	document.getElementById('notice_show').className = document.getElementById('notice_show').className.replace(' error','');
	document.getElementById('notice_show').innerHTML='';
    return true;
  }
}

/* 会员修改密码 */
function editPassword()
{
  var frm              = document.forms['formPassword'];
  var old_password     = frm.elements['old_password'].value;
  var new_password     = frm.elements['new_password'].value;
  var confirm_password = frm.elements['comfirm_password'].value;

  var msg = '';
  var reg = null;

  if (old_password.length == 0)
  {
    msg += '*'+old_password_empty + '<br />';
  }

  if (new_password.length == 0)
  {
    msg += '*'+new_password_empty + '<br />';
  }

  if (confirm_password.length == 0)
  {
    msg += '*'+confirm_password_empty + '<br />';
  }

  if (new_password.length > 0 && confirm_password.length > 0)
  {
    if (new_password != confirm_password)
    {
      msg += '*'+both_password_error + '<br />';
    }
  }

  if (msg.length > 0)
  {
   // alert(msg);
    document.getElementById('notice_show').style.display="block";
	document.getElementById('notice_show').innerHTML=msg;
    return false;
  }
  else
  {
	 document.getElementById('notice_show').style.display="none";
    return true;
  }
}

/* *
 * 对会员的留言输入作处理
 */
function submitMsg()
{
  var frm         = document.forms['formMsg'];
  var msg_title   = frm.elements['msg_title'].value;
  var msg_content = frm.elements['msg_content'].value;
  var msg = '';

  if (msg_title.length == 0)
  {
    msg += msg_title_empty + '\n';
  }
  if (msg_content.length == 0)
  {
    msg += msg_content_empty + '\n'
  }

  if (msg_title.length > 200)
  {
    msg += msg_title_limit + '\n';
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 会员找回密码时，对输入作处理
 */
function submitPwdInfo()
{

  var frm = document.forms['getPassword'];
  var user_name = frm.elements['user_name'].value;
  //var email     = frm.elements['email'].value;
  var confirm_email = frm.elements['confirm_email'].value;
  var email = user_name;
  
  
  var user        = new Object();
  user.username=user_name; 
  user.confirm_email=confirm_email;
  var errorMsg = '';
  /*if (user_name.length == 0)
  {
    errorMsg += user_name_empty + '\n';
  }
*/
  if (user_name.length == 0)
  {
    errorMsg += email_address_empty + '\n';
  }
  else
  {
    if ( ! (Utils.isEmail(user_name)))
    {
      errorMsg += email_address_error + '\n';
    }
  }
  
  if (confirm_email.length == 0)
  {
    errorMsg += email_address_empty + '\n';
  }
  else
  {
    if ( ! (Utils.isEmail(confirm_email)))
    {
      errorMsg += email_address_error + '\n';
    }
  }
  
  if (user_name != confirm_email)
  {
    errorMsg += 'Email Not Match' + '\n';
  }

  if (errorMsg.length > 0)
  {
    alert(errorMsg);
	//document.getElementById('notice_show').style.display="block";
	//document.getElementById('notice_show').innerHTML=errorMsg;
    return false;
  }
  else
  {
    // document.getElementById('notice_show').style.display="none";
	 

		// document.getElementById('show_ajax').style.display="block";
		 
	 	//Ajax.call('user.php?act=send_pwd_email', 'user_pwd=' + user.toJSONString(), submitPwdInfo_callback, 'POST', 'JSON');
	 	return true;

  }   
}

function submitPwdInfo_callback(result)
{
	if(result.error==1)
	{
		document.getElementById('notice_show').style.display="block";
		document.getElementById('notice_show').innerHTML="Please check your Email,type it again.";
		document.getElementById('show_ajax').style.display="none";
		return false;
	}
	else
	{
		/*document.getElementById('notice_show').style.display="none";
		document.getElementById('subject').value=result.subject;
		document.getElementById('content').value=result.content;
		document.getElementById('shop_name').value=result.shop_name;
		document.getElementById('email').value=result.email;*/
		
		document.getElementById('notice_show').style.display="block";
	       document.getElementById('show_ajax').style.display="none";
		document.getElementById('notice_show').innerHTML=" Your email has been sent successfully. Please check out.";
	}
}

/* *
 * 会员找回密码时，对输入作处理
 */
function submitPwd()
{
  var frm = document.forms['getPassword2'];
  var password = frm.elements['new_password'].value;
  var confirm_password = frm.elements['confirm_password'].value;

  var errorMsg = '';
  if (password.length == 0)
  {
    errorMsg += new_password_empty + '\n';
  }

  if (confirm_password.length == 0)
  {
    errorMsg += confirm_password_empty + '\n';
  }

  if (confirm_password != password)
  {
    errorMsg += both_password_error + '\n';
  }

  if (errorMsg.length > 0)
  {
    alert(errorMsg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 处理会员提交的缺货登记
 */
function addBooking()
{
  var frm  = document.forms['formBooking'];
  var goods_id = frm.elements['id'].value;
  var rec_id  = frm.elements['rec_id'].value;
  var number  = frm.elements['number'].value;
  var desc  = frm.elements['desc'].value;
  var linkman  = frm.elements['linkman'].value;
  var email  = frm.elements['email'].value;
  var tel  = frm.elements['tel'].value;
  var msg = "";

  if (number.length == 0)
  {
    msg += booking_amount_empty + '\n';
  }
  else
  {
    var reg = /^[0-9]+/;
    if ( ! reg.test(number))
    {
      msg += booking_amount_error + '\n';
    }
  }

  if (desc.length == 0)
  {
    msg += describe_empty + '\n';
  }

  if (linkman.length == 0)
  {
    msg += contact_username_empty + '\n';
  }

  if (email.length == 0)
  {
    msg += email_empty + '\n';
  }
  else
  {
    if ( ! (Utils.isEmail(email)))
    {
      msg += email_error + '\n';
    }
  }

  if (tel.length == 0)
  {
    msg += contact_phone_empty + '\n';
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }

  return true;
}

/* *
 * 会员登录
 */
function userLogin()
{
  var frm      = document.forms['formLogin'];
  var username = frm.elements['username'].value;
  var password = frm.elements['password'].value;
  var msg = '';
  var back = frm.elements['back_act'].value;
  
   var user        = new Object();
  user.username=username;  
  user.password=password;
  user.back=back;
  
  if (username.length == 0)
  {
    msg += username_empty + '<br />';
  }

  if (password.length == 0)
  {
    msg += password_empty + '<br />';
	document.getElementById("login_password").innerHTML = password_empty ;
  }

  if (msg.length > 0)
  {
/*    document.getElementById('register_error').style.display="block";
	document.getElementById('register_error').innerHTML=msg;*/
    return false;
  }
  else
  {
	 document.getElementById('register_error').style.display="none";
     Ajax.call('user.php?act=userlogin', 'users=' + user.toJSONString(), login_callback, 'POST', 'JSON');
	return false;
  }
}

function login_callback(result)
{
	if(result.error=="0")
	{
		location.href = result.back;
	}
	else
	{
		var msg= result.content;
		 document.getElementById('login_error_show').style.display="block";
	     document.getElementById('login_error_show').innerHTML=msg;	
	}

	
}


function index_userLogin()
{
  var frm      = document.forms['index_formLogin'];
  var username = frm.elements['username'].value;
  var password = frm.elements['password'].value;
  var msg = '';
  if (username.length == 0)
  {
    msg += username_empty + '\n';
  }

  if (password.length == 0)
  {
    msg += password_empty + '\n';
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}


function chkstr(str)
{
  for (var i = 0; i < str.length; i++)
  {
    if (str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig))
    {
      return false;
    }
  }
  return true;
}

function check_password( password )
{
    if ( password.length < 6 || password.length > 20)
    {
		if(password.length == 0){
			document.getElementById('password_notice').innerHTML = password_empty;	
		}else{
       		document.getElementById('password_notice').innerHTML = password_shorter;
		}
    }
    else
    {
        document.getElementById('password_notice').innerHTML = "";
    }
}

function check_conform_password( conform_password )
{
    password = document.getElementById('password1').value;
 
    if ( conform_password != password )
    {
        document.getElementById('conform_password_notice').innerHTML = confirm_password_invalid;
		return false;
    }
    else
    {
       document.getElementById('conform_password_notice').innerHTML = "";
    }
}

function is_registered( username )
{
    var submit_disabled = false;
	var unlen = username.replace(/[^\x00-\xff]/g, "**").length;

    if ( username == '' )
    {
        document.getElementById('username_notice').innerHTML = msg_un_blank;
        var submit_disabled = true;
    }

    if ( !chkstr( username ) )
    {
        document.getElementById('username_notice').innerHTML = msg_un_format;
        var submit_disabled = true;
    }
    //if ( unlen < 3 )
    //{ 
        //document.getElementById('username_notice').innerHTML = username_shorter;
      //  var submit_disabled = true;
    //}
    //if ( unlen > 14 )
    //{
      //  document.getElementById('username_notice').innerHTML = msg_un_length;
        //var submit_disabled = true;
    //}
    if ( submit_disabled )
    {
       // document.forms['formUser'].elements['Submit'].disabled = 'disabled';
        return false;
    }
    Ajax.call( 'user.php?act=is_registered', 'username=' + username, registed_callback , 'GET', 'TEXT', true, true );
	return false;
}



function registed_callback(result)
{
  if ( result == "true" )
  {
    document.getElementById('username_notice').innerHTML = "";
    document.forms['formUser'].elements['Submit'].disabled = '';
  }
  else
  {
    document.getElementById('username_notice').innerHTML = msg_un_registered;
    //document.forms['formUser'].elements['Submit'].disabled = 'disabled';
  }
}

function checkEmail(email , notice_id)
{
  var submit_disabled = false;
  if(!notice_id){
	  notice_id = 'username_notice';
  }
  
  if (email == '')
  {
    try{
	document.getElementById(notice_id).innerHTML = msg_email_blank;
	}catch(e){};
    submit_disabled = true;
  }
  else if (!Utils.isEmail(email))
  {
	try{
    document.getElementById(notice_id).innerHTML = msg_email_format;
	}catch(e){};
    submit_disabled = true;
  }else{
	  try{
	  document.getElementById(notice_id).innerHTML = ''; 
	  }catch(e){};
  }
 
  if( submit_disabled )
  {
    //document.forms['formUser'].elements['Submit'].disabled = 'disabled';
    return false;
  }
  //Ajax.call( 'user.php?act=check_email', 'email=' + email, check_email_callback , 'GET', 'TEXT', true, true );
}

function check_email_callback(result)
{
  if ( result == 'ok' )
  {
    document.getElementById('username_notice').innerHTML = "";
    //document.forms['formUser'].elements['Submit'].disabled = '';
  }
  else
  {
    document.getElementById('username_notice').innerHTML = msg_email_registered;
    //document.forms['formUser'].elements['Submit'].disabled = 'disabled';
  }
}

function checkLoginEmail(email)
{
  var submit_disabled = false;
  
  if (email == '')
  {
    document.getElementById('login_username_notice').innerHTML = msg_email_blank;
    submit_disabled = true;
  }
  else if (!Utils.isEmail(email))
  {
    document.getElementById('login_username_notice').innerHTML = msg_email_format;
    submit_disabled = true;
  }
 
  if( submit_disabled )
  {
    //document.forms['formUser'].elements['Submit'].disabled = 'disabled';
    return false;
  }else{
  	document.getElementById('login_username_notice').innerHTML = "";
  }
  //Ajax.call( 'user.php?act=check_email', 'email=' + email, check_email_callback , 'GET', 'TEXT', true, true );
}
/* *
 * 处理注册用户
 */
function register()
{
  var frm  = document.forms['formUser'];
  
  var username  = Utils.trim(frm.elements['username'].value);
  var email  = frm.elements['email'].value;
  var password  = Utils.trim(frm.elements['password'].value);
  var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
  var checked_agreement = frm.elements['agreement'].checked;
  var msn = frm.elements['other[msn]'] ? Utils.trim(frm.elements['other[msn]'].value) : '';
  var qq = frm.elements['other[qq]'] ? Utils.trim(frm.elements['other[qq]'].value) : '';
  var home_phone = frm.elements['other[home_phone]'] ? Utils.trim(frm.elements['other[home_phone]'].value) : '';
  var office_phone = frm.elements['other[office_phone]'] ? Utils.trim(frm.elements['other[office_phone]'].value) : '';
  var mobile_phone = frm.elements['other[mobile_phone]'] ? Utils.trim(frm.elements['other[mobile_phone]'].value) : '';
  var first_name  = '';
  var last_name  = '';
  var address  = '';
  var sign_building  = '';
  var best_time  = '';
  var country  = '';
  var zipcode  = '';
  var tel  = '';
  
   var user        = new Object();
   user.username=username;  
   user.password=password;
   user.email=username;
   user.checked_agreement=1;
   user.first_name=first_name;  
   user.last_name=last_name;  
   user.true_email=username;
   user.address=address;  
   user.sign_building=sign_building;  
   user.best_time=best_time;  
   user.country=country;  
   user.zipcode=zipcode;  
   user.tel=tel;  

  var msg = "";
  // 检查输入
  var msg = '';
  if (username.length == 0)
  {
    msg += username_empty + '<br />';
	document.getElementById('username_notice').innerHTML = username_empty;
  }
 // else if (username.match(/^\s*$|^c:\\con\\con$|[%,\'\*\"\s\t\<\>\&\\]/))
 // {
    //msg += username_invalid + '\n';
 // }
 // else if (username.length < 3)
  //{
    //msg += username_shorter + '\n';
  //}

 // if (email.length == 0)
 // {
  //  msg += email_empty + '\n';
 // }
  else
  {
    if ( ! (Utils.isEmail(username)))
    {
      msg += email_invalid + '<br />';
      document.getElementById('username_notice').innerHTML = email_invalid ;
    }
  }
  if (password.length == 0)
  {
    msg += password_empty + '<br />';
    document.getElementById('password_notice').innerHTML = password_empty;
  }
  else if (password.length < 6)
  {
    msg += password_shorter + '<br />';
    document.getElementById('password_notice').innerHTML = password_shorter;
  }
  if (confirm_password != password )
  {
    msg += confirm_password_invalid + '<br />';
    document.getElementById('conform_password_notice').innerHTML = confirm_password_invalid ;
  }
  // if(checked_agreement != true)
  // {
    //document.getElementById('checked_agreement_notice').innerHTML = agreement ;
    // msg += agreement + '<br />';
  // }

  if (msn.length > 0 && (!Utils.isEmail(msn)))
  {
    msg += msn_invalid + '<br />';
  }

  if (qq.length > 0 && (!Utils.isNumber(qq)))
  {
    msg += qq_invalid + '<br />';
  }

  if (office_phone.length>0)
  {
    var reg = /^[\d|\-|\s]+$/;
    if (!reg.test(office_phone))
    {
      msg += office_phone_invalid + '<br />';
    }
  }
  if (home_phone.length>0)
  {
    var reg = /^[\d|\-|\s]+$/;

    if (!reg.test(home_phone))
    {
      msg += home_phone_invalid + '<br />';
    }
  }
  if (mobile_phone.length>0)
  {
    var reg = /^[\d|\-|\s]+$/;
    if (!reg.test(mobile_phone))
    {
      msg += mobile_phone_invalid + '<br />';
    }
  }
  yj_checkConsignee(frm);
  if (msg.length > 0)
  {
/*	document.getElementById('register_error').style.display="block";
	document.getElementById('register_error').innerHTML=msg;*/
     return false;
  }
  else
  { 
	 document.getElementById('register_error').style.display="none";
	 Ajax.call('user.php?act=userregister', 'users_r=' + user.toJSONString(), register_callback, 'POST', 'JSON');
  	 return false;
  }
}
function register_callback(result)
{
	if(result.error=="0")
	{
		location.href = result.url;
	}
	else
	{
		 var msg=result.content;
		 document.getElementById('register_error').style.display="block";
	     document.getElementById('register_error').innerHTML=msg;
	}
}


/* *
 * 用户中心订单保存地址信息
 */
function saveOrderAddress(id)
{
  var frm           = document.forms['formAddress'];
  var consignee     = frm.elements['consignee'].value;
  var email         = frm.elements['email'].value;
  var address       = frm.elements['address'].value;
  var zipcode       = frm.elements['zipcode'].value;
  var tel           = frm.elements['tel'].value;
  var mobile        = frm.elements['mobile'].value;
  var sign_building = frm.elements['sign_building'].value;
  var best_time     = frm.elements['best_time'].value;

  if (id == 0)
  {
    alert(current_ss_not_unshipped);
    return false;
  }
  var msg = '';
  if (address.length == 0)
  {
    msg += address_name_not_null + "\n";
  }
  if (consignee.length == 0)
  {
    msg += consignee_not_null + "\n";
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 会员余额申请
 */
function submitSurplus()
{
  var frm            = document.forms['formSurplus'];
  var surplus_type   = frm.elements['surplus_type'].value;
  var surplus_amount = frm.elements['amount'].value;
  var process_notic  = frm.elements['user_note'].value;
  var payment_id     = 0;
  var msg = '';

  if (surplus_amount.length == 0 )
  {
    msg += surplus_amount_empty + "\n";
  }
  else
  {
    var reg = /^[\.0-9]+/;
    if ( ! reg.test(surplus_amount))
    {
      msg += surplus_amount_error + '\n';
    }
  }

  if (process_notic.length == 0)
  {
    msg += process_desc + "\n";
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }

  if (surplus_type == 0)
  {
    for (i = 0; i < frm.elements.length ; i ++)
    {
      if (frm.elements[i].name=="payment_id" && frm.elements[i].checked)
      {
        payment_id = frm.elements[i].value;
        break;
      }
    }

    if (payment_id == 0)
    {
      alert(payment_empty);
      return false;
    }
  }

  return true;
}

/* *
 *  处理用户添加一个红包
 */
function addBonus()
{
  var frm      = document.forms['addBouns'];
  var bonus_sn = frm.elements['bonus_sn'].value;

  if (bonus_sn.length == 0)
  {
    alert(bonus_sn_empty);
    return false;
  }
  else
  {
    var reg = /^[0-9]{10}$/;
    if ( ! reg.test(bonus_sn))
    {
      alert(bonus_sn_error);
      return false;
    }
  }

  return true;
}

/* *
 *  合并订单检查
 */
function mergeOrder()
{
  if (!confirm(confirm_merge))
  {
    return false;
  }

  var frm        = document.forms['formOrder'];
  var from_order = frm.elements['from_order'].value;
  var to_order   = frm.elements['to_order'].value;
  var msg = '';

  if (from_order == 0)
  {
    msg += from_order_empty + '\n';
  }
  if (to_order == 0)
  {
    msg += to_order_empty + '\n';
  }
  else if (to_order == from_order)
  {
    msg += order_same + '\n';
  }
  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 订单中的商品返回购物车
 * @param       int     orderId     订单号
 */
function returnToCart(orderId)
{
  Ajax.call('user.php?act=return_to_cart', 'order_id=' + orderId, returnToCartResponse, 'POST', 'JSON');
}

function returnToCartResponse(result)
{
  alert(result.message);
}

/* *
 * 检测密码强度
 * @param       string     pwd     密码
 */
function checkIntensity(pwd)
{
  var Mcolor = "#FFF",Lcolor = "#FFF",Hcolor = "#FFF";
  var m=0;

  var Modes = 0;
  for (i=0; i<pwd.length; i++)
  {
    var charType = 0;
    var t = pwd.charCodeAt(i);
    if (t>=48 && t <=57)
    {
      charType = 1;
    }
    else if (t>=65 && t <=90)
    {
      charType = 2;
    }
    else if (t>=97 && t <=122)
      charType = 4;
    else
      charType = 4;
    Modes |= charType;
  }

  for (i=0;i<4;i++)
  {
    if (Modes & 1) m++;
      Modes>>>=1;
  }

  if (pwd.length<=4)
  {
    m = 1;
  }

  switch(m)
  {
    case 1 :
      Lcolor = "2px solid red";
      Mcolor = Hcolor = "2px solid #DADADA";
    break;
    case 2 :
      Mcolor = "2px solid #f90";
      Lcolor = Hcolor = "2px solid #DADADA";
    break;
    case 3 :
      Hcolor = "2px solid #3c0";
      Lcolor = Mcolor = "2px solid #DADADA";
    break;
    case 4 :
      Hcolor = "2px solid #3c0";
      Lcolor = Mcolor = "2px solid #DADADA";
    break;
    default :
      Hcolor = Mcolor = Lcolor = "";
    break;
  }
  if (document.getElementById("pwd_lower"))
  {
    document.getElementById("pwd_lower").style.borderBottom  = Lcolor;
    document.getElementById("pwd_middle").style.borderBottom = Mcolor;
    document.getElementById("pwd_high").style.borderBottom   = Hcolor;
  }


}

function changeType(obj)
{
  if (obj.getAttribute("min") && document.getElementById("ECS_AMOUNT"))
  {
    //document.getElementById("ECS_AMOUNT").disabled = false;
    document.getElementById("ECS_AMOUNT").value = obj.getAttribute("min");
    if (document.getElementById("ECS_NOTICE") && obj.getAttribute("to") && obj.getAttribute('fee'))
    {
      var fee = parseInt(obj.getAttribute("fee"));
      var to = parseInt(obj.getAttribute("to"));
      if (fee < 0)
      {
        to = to + fee * 2;
      }
      document.getElementById("ECS_NOTICE").innerHTML = notice_result + to;
    }
  }
}

function calResult()
{
  var amount = document.getElementById("ECS_AMOUNT").value;
  var notice = document.getElementById("ECS_NOTICE");

  reg = /^\d+$/;
  if (!reg.test(amount))
  {
    notice.innerHTML = notice_not_int;
    return;
  }
  amount = parseInt(amount);
  var frm = document.forms['transform'];
  for(i=0; i < frm.elements['type'].length; i++)
  {
    if (frm.elements['type'][i].checked)
    {
      var min = parseInt(frm.elements['type'][i].getAttribute("min"));
      var to = parseInt(frm.elements['type'][i].getAttribute("to"));
      var fee = parseInt(frm.elements['type'][i].getAttribute("fee"));
      var result = 0;
      if (amount < min)
      {
        notice.innerHTML = notice_overflow + min;
        return;
      }

      if (fee > 0)
      {
        result = (amount - fee) * to / (min -fee);
      }
      else
      {
        //result = (amount + fee* min /(to+fee)) * (to + fee) / min ;
        result = amount * (to + fee) / min + fee;
      }

      notice.innerHTML = notice_result + parseInt(result + 0.5);
    }
  }
}

function checkSignupForm(form){
	if(!form){
		form = document.getElementById('registerForm');
		if(form && form.style.display == 'none'){
			return true;
		}
	}
	// console.dir(form.elements);
	var notice_id = 'username_notice';
	var email = document.getElementById('username').value;
	if (email == '')
	{
		try{
			document.getElementById(notice_id).innerHTML = msg_email_blank;
			return false;
		}catch(e){};
	}else if(!Utils.isEmail(email))	{
		try{
			document.getElementById(notice_id).innerHTML = msg_email_format;
			return false;
		}catch(e){};
	}else{
	  try{
		document.getElementById(notice_id).innerHTML = ''; 
	  }catch(e){};
	}

	var password = document.getElementById('password1').value;
	if ( password.length < 6 || password.length > 20)
    {
		if(password.length == 0){
			document.getElementById('password_notice').innerHTML = password_empty;	
		}else{
       		document.getElementById('password_notice').innerHTML = password_shorter;
		}
		return false;
    }
    else
    {
        document.getElementById('password_notice').innerHTML = "";
    }

	conform_password = document.getElementById('confirm_password').value;
	if ( conform_password != password )
    {
        document.getElementById('conform_password_notice').innerHTML = confirm_password_invalid;
		return false;
    }
    else
    {
       document.getElementById('conform_password_notice').innerHTML = "";
    }
	if(checkConsignee(document.getElementById('checkout_ship_info'))){
		form.submit();
	}
	return false;
}