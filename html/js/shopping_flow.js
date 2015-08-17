/* $Id : shopping_flow.js 4865 2007-01-31 14:04:10Z paulgao $ */

var selectedShipping = null;
var selectedPayment  = null;
var selectedPack     = null;
var selectedCard     = null;
var selectedSurplus  = '';
var selectedBonus    = 0;
var selectedIntegral = 0;
var selectedOOS      = null;
var alertedSurplus   = false;

var groupBuyShipping = null;
var groupBuyPayment  = null;

function selectShipping(obj)
{
  if (selectedShipping == obj)
  {
    return;
  }
  else
  {
    selectedShipping = obj;
  }
/*
  var supportCod = obj.attributes['supportCod'].value + 0;
  var theForm = obj.form;

  for (i = 0; i < theForm.elements.length; i ++ )
  {
    if (theForm.elements[i].name == 'payment' && theForm.elements[i].attributes['isCod'].value == '1')
    {
      if (supportCod == 0)
      {
        theForm.elements[i].checked = false;
        theForm.elements[i].disabled = true;
      }
      else
      {
        theForm.elements[i].disabled = false;
      }
    }
  }
  */
/*
  if (obj.attributes['insure'].value + 0 == 0)
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = true;
  }
  else
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = false;
  }
*/
  var now = new Date();
  Ajax.call('flow.php?step=checkout&select_shipping=1&is_ajax=1', 'shipping=' + obj.value, orderShippingSelectedResponse, 'GET', 'JSON');
}

/**
 *
 */
function orderShippingSelectedResponse(result)
{
  if (result.need_insure)
  {
    try
    {
      document.getElementById('ECS_NEEDINSURE').checked = true;
    }
    catch (ex)
    {
      alert(ex.message);
    }
  }

  try
  {
	/*
    if (document.getElementById('ECS_CODFEE') != undefined)
    {
      document.getElementById('ECS_CODFEE').innerHTML = result.cod_fee;
    }*/
	// if(result.shipping_fee > 0){
		// document.getElementById('CHECKOUT_TOTAL_PANEL').innerHTML = '<ul><li class="totalprice1">Item(s) Total: <span>' + result.formated_goods_price + '</span></li><li class="totalshipping">Shipping: <span>' + result.shipping_fee_formated + '</span></li><li class="totalprice">Total: <span>' + result.amount_formated + '</span></li></ul>';		
	// }else{
		// document.getElementById('CHECKOUT_TOTAL_PANEL').innerHTML = '<ul><li class="totalprice1">Item(s) Total: <span>' + result.formated_goods_price + '</span></li><li class="totalshipping">Shipping: <span>' + result.shipping_fee_formated + '</span></li><li class="totalprice">Total: <span>' + result.amount_formated + '</span></li></ul>';	
	// }
  }
  catch (ex)
  {
    alert(ex.message);
  }
	// document.getElementById('checkout-total').outerHTML = result.content;
	Sizzle('.check_left_checkout')[0].innerHTML = result.content;
  // orderSelectedResponse(result);
}

/* *
 * 改变支付方式
 */
function selectPayment(obj)
{
  if (selectedPayment == obj)
  {
    return;
  }
  else
  {
    selectedPayment = obj;
  }

  Ajax.call('flow.php?step=select_payment', 'payment=' + obj.value, orderSelectedResponse, 'GET', 'JSON');
}
/* *
 * 团购购物流程 --> 改变配送方式
 */
function handleGroupBuyShipping(obj)
{
  if (groupBuyShipping == obj)
  {
    return;
  }
  else
  {
    groupBuyShipping = obj;
  }

  var supportCod = obj.attributes['supportCod'].value + 0;
  var theForm = obj.form;

  for (i = 0; i < theForm.elements.length; i ++ )
  {
    if (theForm.elements[i].name == 'payment' && theForm.elements[i].attributes['isCod'].value == '1')
    {
      if (supportCod == 0)
      {
        theForm.elements[i].checked = false;
        theForm.elements[i].disabled = true;
      }
      else
      {
        theForm.elements[i].disabled = false;
      }
    }
  }

  if (obj.attributes['insure'].value + 0 == 0)
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = true;
  }
  else
  {
    document.getElementById('ECS_NEEDINSURE').checked = false;
    document.getElementById('ECS_NEEDINSURE').disabled = false;
  }

  Ajax.call('group_buy.php?act=select_shipping', 'shipping=' + obj.value, orderSelectedResponse, 'GET');
}

/* *
 * 团购购物流程 --> 改变支付方式
 */
function handleGroupBuyPayment(obj)
{
  if (groupBuyPayment == obj)
  {
    return;
  }
  else
  {
    groupBuyPayment = obj;
  }

  Ajax.call('group_buy.php?act=select_payment', 'payment=' + obj.value, orderSelectedResponse, 'GET');
}

/* *
 * 改变商品包装
 */
function selectPack(obj)
{
  if (selectedPack == obj)
  {
    return;
  }
  else
  {
    selectedPack = obj;
  }

  Ajax.call('flow.php?step=select_pack', 'pack=' + obj.value, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 改变祝福贺卡
 */
function selectCard(obj)
{
  if (selectedCard == obj)
  {
    return;
  }
  else
  {
    selectedCard = obj;
  }

  Ajax.call('flow.php?step=select_card', 'card=' + obj.value, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 选定了配送保价
 */
function selectInsure(needInsure)
{
  needInsure = needInsure ? 1 : 0;

  Ajax.call('flow.php?step=select_insure', 'insure=' + needInsure, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 团购购物流程 --> 选定了配送保价
 */
function handleGroupBuyInsure(needInsure)
{
  needInsure = needInsure ? 1 : 0;

  Ajax.call('group_buy.php?act=select_insure', 'insure=' + needInsure, orderSelectedResponse, 'GET', 'JSON');
}

/* *
 * 回调函数
 */
function orderSelectedResponse(result)
{
  if (result.error)
  {
    alert(result.error);
    // location.href = './';
  }

  try
  {
    var layer = document.getElementById("ECS_ORDERTOTAL");

    layer.innerHTML = (typeof result == "object") ? result.content : result;

    if (result.payment != undefined)
    {
      var surplusObj = document.forms['theForm'].elements['surplus'];
      if (surplusObj != undefined)
      {
        surplusObj.disabled = result.pay_code == 'balance';
      }
    }
  }
  catch (ex) { }
}

/* *
 * 改变余额
 */
function changeSurplus(val)
{
  if (selectedSurplus == val)
  {
    return;
  }
  else
  {
    selectedSurplus = val;
  }

  Ajax.call('flow.php?step=change_surplus', 'surplus=' + val, changeSurplusResponse, 'GET', 'JSON');
}

/* *
 * 改变余额回调函数
 */
function changeSurplusResponse(obj)
{
  if (obj.error)
  {
    try
    {
      document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = obj.error;
      document.getElementById('ECS_SURPLUS').value = '0';
      document.getElementById('ECS_SURPLUS').focus();
    }
    catch (ex) { }
  }
  else
  {
    try
    {
      document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = '';
    }
    catch (ex) { }
    orderSelectedResponse(obj.content);
  }
}

/* *
 * 改变积分
 */
function changeIntegral(val)
{
  if (selectedIntegral == val)
  {
    return;
  }
  else
  {
    selectedIntegral = val;
  }

  Ajax.call('flow.php?step=change_integral', 'points=' + val, changeIntegralResponse, 'GET', 'JSON');
}

/* *
 * 改变积分回调函数
 */
function changeIntegralResponse(obj)
{
  if (obj.error)
  {
    try
    {
      document.getElementById('ECS_INTEGRAL_NOTICE').innerHTML = obj.error;
      document.getElementById('ECS_INTEGRAL').value = '0';
      document.getElementById('ECS_INTEGRAL').focus();
    }
    catch (ex) { }
  }
  else
  {
    try
    {
      document.getElementById('ECS_INTEGRAL_NOTICE').innerHTML = '';
    }
    catch (ex) { }
    orderSelectedResponse(obj.content);
  }
}

/* *
 * 改变红包
 */
function changeBonus(val)
{
  if (selectedBonus == val)
  {
    return;
  }
  else
  {
    selectedBonus = val;
  }

  Ajax.call('flow.php?step=change_bonus', 'bonus=' + val, changeBonusResponse, 'GET', 'JSON');
}

/* *
 * 改变红包的回调函数
 */
function changeBonusResponse(obj)
{
  if (obj.error)
  {
    alert(obj.error);

    try
    {
      document.getElementById('ECS_BONUS').value = '0';
    }
    catch (ex) { }
  }
  else
  {
    orderSelectedResponse(obj.content);
  }
}

/**
 * 验证红包序列号
 * @param string bonusSn 红包序列号
 */
function validateBonus()
{
  var bonusSn = document.getElementById('hidCouponcode').value;
  Ajax.call('flow.php?step=validate_bonus', 'bonus_sn=' + bonusSn, validateBonusResponse, 'GET', 'JSON');
  return false;
}

function validateBonusResponse(obj)
{

if (obj.error)
  {
    document.getElementById('coupon_message').innerHTML = obj.error;
  }
  else
  {
    document.getElementById('checkout-total').outerHTML = obj.content;
    document.getElementById('order_bonus_id').value = obj.bonus_id;
	// document.getElementById('coupon_message').innerHTML = '';
  }
}

/* *
 * 改变发票的方式
 */
function changeNeedInv()
{
  var obj        = document.getElementById('ECS_NEEDINV');
  var objType    = document.getElementById('ECS_INVTYPE');
  var objPayee   = document.getElementById('ECS_INVPAYEE');
  var objContent = document.getElementById('ECS_INVCONTENT');
  var needInv    = obj.checked ? 1 : 0;
  var invType    = obj.checked ? (objType != undefined ? objType.value : '') : '';
  var invPayee   = obj.checked ? objPayee.value : '';
  var invContent = obj.checked ? objContent.value : '';
  objType.disabled = objPayee.disabled = objContent.disabled = ! obj.checked;
  if(objType != null)
  {
    objType.disabled = ! obj.checked;
  }

  Ajax.call('flow.php?step=change_needinv', 'need_inv=' + needInv + '&inv_type=' + encodeURIComponent(invType) + '&inv_payee=' + encodeURIComponent(invPayee) + '&inv_content=' + encodeURIComponent(invContent), orderSelectedResponse, 'GET');
}

/* *
 * 改变发票的方式
 */
function groupBuyChangeNeedInv()
{
  var obj        = document.getElementById('ECS_NEEDINV');
  var objPayee   = document.getElementById('ECS_INVPAYEE');
  var objContent = document.getElementById('ECS_INVCONTENT');
  var needInv    = obj.checked ? 1 : 0;
  var invPayee   = obj.checked ? objPayee.value : '';
  var invContent = obj.checked ? objContent.value : '';
  objPayee.disabled = objContent.disabled = ! obj.checked;

  Ajax.call('group_buy.php?act=change_needinv', 'need_idv=' + needInv + '&amp;payee=' + invPayee + '&amp;content=' + invContent, null, 'GET');
}

/* *
 * 改变缺货处理时的处理方式
 */
function changeOOS(obj)
{
  if (selectedOOS == obj)
  {
    return;
  }
  else
  {
    selectedOOS = obj;
  }

  Ajax.call('flow.php?step=change_oos', 'oos=' + obj.value, null, 'GET');
}

/* *
 * 检查提交的订单表单
 */
function checkOrderForm(frm)
{
  var paymentSelected = false;
  var shippingSelected = false;

  // 检查是否选择了支付配送方式
  for (i = 0; i < frm.elements.length; i ++ )
  {
    if (frm.elements[i].name == 'shipping' && frm.elements[i].checked)
    {
      shippingSelected = true;
    }

    if (frm.elements[i].name == 'payment' && frm.elements[i].checked)
    {
      paymentSelected = true;
    }
  }

  if ( ! shippingSelected)
  {
    alert(flow_no_shipping);
    return false;
  }

  if ( ! paymentSelected)
  {
    alert(flow_no_payment);
    return false;
  }

  // 检查用户输入的余额
  if (document.getElementById("ECS_SURPLUS"))
  {
    var surplus = document.getElementById("ECS_SURPLUS").value;
    var error   = Utils.trim(Ajax.call('flow.php?step=check_surplus', 'surplus=' + surplus, null, 'GET', 'TEXT', false));

    if (error)
    {
      try
      {
        document.getElementById("ECS_SURPLUS_NOTICE").innerHTML = error;
      }
      catch (ex)
      {
      }
      return false;
    }
  }

  // 检查用户输入的积分
  if (document.getElementById("ECS_INTEGRAL"))
  {
    var integral = document.getElementById("ECS_INTEGRAL").value;
    var error    = Utils.trim(Ajax.call('flow.php?step=check_integral', 'integral=' + integral, null, 'GET', 'TEXT', false));

    if (error)
    {
      return false;
      try
      {
        document.getElementById("ECS_INTEGRAL_NOTICE").innerHTML = error;
      }
      catch (ex)
      {
      }
    }
  }
  
  if(document.getElementById('flow_card_info').style.display == 'block'){
	var cardNumber = document.getElementById('cardNumber').value;
	var CVV2 = document.getElementById('CVV2').value;
	var issuringBank = document.getElementById('issuringBank').value;
	if(!cardNumber){
		alert('Please Input Card Number');
		return false;
	}
	if(!CVV2){
		alert('Please Input CVV2');
		return false;
	}
	if(!issuringBank){
		alert('Please Input Issuring Bank');
		return false;
	}
  }
  frm.action = frm.action + '?step=done';
  return true;
}


/*添加错误对象*/
function show_consignee_err(obj,id,message){
	var id_obj = document.getElementById(id);
	if(id_obj)
{
		id_obj.innerHTML = message;
	}else{
		var Child_obj 					= document.createElement("div");//创建一个DIV节点
				Child_obj.className = "consignee_error";
				Child_obj.id 				= id;
				Child_obj.innerHTML	=	message;
		obj.parentNode.appendChild(Child_obj);
	}
}
function yj_checkConsignee(frm){
	var error = false;//默认返回错误
	try{
		if (frm.elements['country'] && frm.elements['country'].value == 0){
			show_consignee_err(frm.elements['country'],"country_error_msg","Please select a valid US state.");
			error = true;

		}else{
			//show_consignee_err(frm.elements['country'],"country_error_msg","");
		}	 
		if (frm.elements['first_name'] && Utils.isEmpty(frm.elements['first_name'].value) ){
			show_consignee_err(frm.elements['first_name'],"first_name_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['first_name'],"first_name_error_msg","");
		}
		
		if (frm.elements['last_name'] && Utils.isEmpty(frm.elements['last_name'].value)){
			show_consignee_err(frm.elements['last_name'],"last_name_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['last_name'],"last_name_error_msg","");
		}

		if (frm.elements['address'] && Utils.isEmpty(frm.elements['address'].value) ){
			show_consignee_err(frm.elements['address'],"address_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['address'],"address_error_msg","");
		}
		
		if (frm.elements['sign_building'] && Utils.isEmpty(frm.elements['sign_building'].value) ){
			show_consignee_err(frm.elements['sign_building'],"sign_building_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['sign_building'],"sign_building_error_msg","");
		}
		
		if (frm.elements['best_time'] && Utils.isEmpty(frm.elements['best_time'].value)){
			show_consignee_err(frm.elements['best_time'],"best_time_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['best_time'],"best_time_error_msg","");
		}
		
		if (frm.elements['zipcode'] && Utils.isEmpty(frm.elements['zipcode'].value)){
			show_consignee_err(frm.elements['zipcode'],"zipcode_error_msg","This field is required");
			error = true;
		}else{
			show_consignee_err(frm.elements['zipcode'],"zipcode_error_msg","");
		}

  	if(Utils.isEmpty(frm.elements['email'].value)){
			show_consignee_err(frm.elements['email'],"email_error_msg","This field is required");
			error = true;
		}else if( ! Utils.isEmail(frm.elements['email'].value) ){
			show_consignee_err(frm.elements['email'],"email_error_msg",invalid_email);
			error = true;
		}else{
			show_consignee_err(frm.elements['email'],"email_error_msg","");
		}
		if(frm.elements['tel']){
			if(Utils.isEmpty(frm.elements['tel'].value)){
				show_consignee_err(frm.elements['tel'],"tel_error_msg","This field is required");
				error = true;
			}else if(!Utils.isTel(frm.elements['tel'].value)){
				show_consignee_err(frm.elements['tel'],"tel_error_msg",tele_invaild);
				error = true;
			}else{
				show_consignee_err(frm.elements['tel'],"tel_error_msg","");
			}
		}
	}catch(e){
		//alert(e.toString());
		return false;
	}
	if(error){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	return ! error;
}
/* *
 * 检查收货地址信息表单中填写的内容
 */
function checkConsignee(frm){
	/*调用yj写的验证函数!*/
	return yj_checkConsignee(frm);
  var msg = new Array();
  var err = false;
  var message='';

  if (frm.elements['country'] && frm.elements['country'].value == 0)
  {
    msg.push(country_not_null);
		message+="*"+country_not_null+"<br />";
    err = true;
  }
  if (frm.elements['first_name'] && frm.elements['first_name'].value == 0)
  {
    msg.push("Please enter first_name");
		message+="*"+"Please enter first_name"+"<br />";
    err = true;
	
  }
  if (frm.elements['last_name'] && frm.elements['last_name'].value == 0)
  {
    msg.push("Please enter last_name");
		message+="*"+"Please enter last_name"+"<br />";
    err = true;
  }
  if (frm.elements['sign_building'] && frm.elements['sign_building'].value == 0)
	{
    err = true;
    msg.push(city_not_null);
		message+="*"+city_not_null+"<br />";
  }
  if (frm.elements['best_time'] && frm.elements['best_time'].value == 0)
  {
    err = true;
    //msg.push(city_not_null);
		message+="*"+"Please select a State/Prov of consignee!"+"<br />";
  }

  if (frm.elements['province'] && frm.elements['province'].value == 0 && frm.elements['province'].length > 1)
  {
    err = true;
    msg.push(province_not_null);
		message+="*"+province_not_null+"<br />";
  }

  if (frm.elements['city'] && frm.elements['city'].value == 0 && frm.elements['city'].length > 1)
  {
    err = true;
    msg.push(city_not_null);
		message+="*"+city_not_null+"<br />";
  }
  

  if (frm.elements['district'] && frm.elements['district'].length > 1)
  {
    if (frm.elements['district'].value == 0)
    {
      err = true;
      msg.push(district_not_null);
	  message+="*"+district_not_null+"<br />";
    }
  }

  /*if (Utils.isEmpty(frm.elements['consignee'].value))
  {
    err = true;
    msg.push(consignee_not_null);
	message+="*"+consignee_not_null+"<br />";
  }*/

  if ( ! Utils.isEmail(frm.elements['email'].value))
  {
    err = true;
    msg.push(invalid_email);
	message+="*"+invalid_email+"<br />";
  }

  if (frm.elements['address'] && Utils.isEmpty(frm.elements['address'].value))
  {
    err = true;
    msg.push(address_not_null);
		message +="*"+address_not_null+"<br />";
  }

  if (frm.elements['zipcode'] && frm.elements['zipcode'].value.length < 1)
  {
    err = true;
    msg.push(zip_not_num);
	message+="*"+zip_not_num+"<br />";
  }

  if (Utils.isEmpty(frm.elements['tel'].value))
  {
    err = true;
    msg.push(tele_not_null);
	message+="*"+tele_not_null+"<br />";
  }
  else
  {
    if (!Utils.isTel(frm.elements['tel'].value))
    {
      err = true;
      msg.push(tele_invaild);
	  message+="*"+tele_invaild+"<br />";
    }
  }

  if (frm.elements['mobile'] && frm.elements['mobile'].value.length > 0 && (!Utils.isTel(frm.elements['mobile'].value)))
  {
    err = true;
    msg.push(mobile_invaild);
	message+="*"+mobile_invaild+"<br />";
  }

  if (err)
  {
    //message = msg.join("<br />");
   // alert(message);
    document.getElementById('notice_show').style.display="block";
		document.getElementById('notice_show').innerHTML=message;
  }
  else
  {
	  document.getElementById('notice_show').style.display="none";  
  }
  return ! err;
}

function checkUserConsignee(form){
	var v = checkConsignee(form);
	if (!v) return false;
	
	var params = '';
	for (var i = 0, n = form.elements.length; i < n; i++) {
		if (typeof(form.elements[i].name) == 'undefined' || typeof(form.elements[i].value) == 'undefined') continue;
		if (form.elements[i].type == 'radio') {
			if (form.elements[i].checked) params += form.elements[i].name + '=' + form.elements[i].value + '&';
		} else {
			params += form.elements[i].name + '=' + form.elements[i].value + '&';
		}
	}
	params += "is_ajax=true" ;
	Ajax.call('user.php', params, function(result) {
		document.getElementById("USER_CONSIGNEE_LIST").innerHTML = result;
		return false;
	}, 'POST', 'TEXT', true, true);
	return false;
}
//flow
/*
   function update_cart(e) {
	clearTimeout(window.updatecarttime);
	window.updatecarttime = setTimeout(function(){
		if(isNaN(parseInt(e.value)))
			return false;
		if(parseInt(e.value)==0)
			return false;
		var elements = document.getElementById('formCart').elements;
		var params = '';
		for(var i=0; i < elements.length; i++) {
			var element = elements[i];
			if (element.type == 'text') {
				var pos_1 = element.name.indexOf('[') + 1;
				var pos_2 = element.name.indexOf(']');
				var name = element.name.substr(pos_1, pos_2 - pos_1);
				var value = element.value;
				params += '|||' + name + '-' + value;
			}
		}
		if (params !== '') params = params.substring(3);
			Ajax.call( 'flow.php', 'step=update_cart&goods_number=' + params, update_cart_callback , 'POST', 'TEXT', true, true );
		return false;
	},600)
  }
  

  function update_cart_callback(result) {
  	var pos_cart = result.lastIndexOf('~');
 	var update_cart = result.substring(0,pos_cart); 
  	var result = result.substring(pos_cart + 1); 
  	var pos = result.lastIndexOf(',');
  	var total = result.substring(pos + 1);
	result = result.substring(0, pos);
	var all_num = 0;
	var elements = document.getElementById('formCart').elements;
	for(var i=0; i < elements.length; i++) {
		var element = elements[i];
		if (element.type == 'text') {
			var pos = result.indexOf(',');
			var num = result.substring(0, pos);
			result = result.substring(pos + 1);
			pos = result.indexOf(',');
			var subtotal = '';
			if (pos === -1) { subtotal = result; result = ''; }
			else {
				subtotal = result.substring(0, pos);
				result = result.substring(pos + 1);
			}
			
			element.value = num;
			document.getElementById(element.name + '_price').innerHTML = subtotal;
			all_num += Number(num);
		}
	}
		try{
			var total_div = document.getElementById('AUTO_TOTAL');
			total_div.innerHTML =  total;	
			document.getElementById("top_cart_number").innerHTML= all_num;
			document.getElementById('top_cart_amount').innerHTML = total;

		}catch(e){
			//alert(e.toString());
		}
		
	 document.getElementById('topcart').innerHTML = update_cart;
  }
*/



    function update_cart(e) {
	clearTimeout(window.updatecarttime);
	window.updatecarttime = setTimeout(function(){
		if(isNaN(parseInt(e.value)))
			return false;
		if(parseInt(e.value)==0)
			return false;
		var elements = document.getElementById('formCart').elements;
		var params = '';
		for(var i=0; i < elements.length; i++) {
			var element = elements[i];
			if (element.type == 'text') {
				var pos_1 = element.name.indexOf('[') + 1;
				var pos_2 = element.name.indexOf(']');
				var name = element.name.substr(pos_1, pos_2 - pos_1);
				var value = element.value;
				params += '|||' + name + '-' + value;
			}
		}
		if (params !== '') params = params.substring(3);
			Ajax.call( 'flow.php', 'step=update_cart&goods_number=' + params, update_cart_callback , 'POST', 'TEXT', true, true );
		return false;
	},600)
	}
  
  function update_cart_callback(result) { 
  	var pos = result.lastIndexOf(',');
  	var totalparm = result.substring(pos + 1);
	var pos1 = totalparm.lastIndexOf('~');
	var total = totalparm.substring(pos1 + 1);
	var saving = totalparm.substring(0,pos1);
	result = result.substring(0, pos);
	var all_num = 0;
	var elements = document.getElementById('formCart').elements;
	for(var i=0; i < elements.length; i++) {
		var element = elements[i];
		if (element.type == 'text') {
			var pos = result.indexOf(',');
			var num = result.substring(0, pos);
			result = result.substring(pos + 1);
			pos = result.indexOf(',');
			var subtotal = '';
			if (pos === -1) { subtotal = result; result = ''; }
			else {
				subtotal = result.substring(0, pos);
				result = result.substring(pos + 1);
			}
			
			element.value = num;
			document.getElementById(element.name + '_price').innerHTML = subtotal;
			document.getElementById(element.name + '_top_cart_qty').value = num;
			// tempstr = document.getElementById(element.name + '_topprice').innerHTML;
			// pos = tempstr.indexOf('*');
			// tempstr = tempstr.substring(0,pos+1);
			// document.getElementById(element.name + '_topprice').innerHTML = tempstr + num + '=' + subtotal;
			all_num += Number(num);
		}
	}
		try{
			var total_div = document.getElementById('AUTO_TOTAL');
			goods_prefix = total.split(' ')[0];
			goods_price = parseFloat(total.split(' ')[1]);
			if(parseInt(goods_price) >= 35){
				Sizzle('.totalprice1')[0].innerHTML = 'Item(s) Total: '+'<span>' + total +'</span>';
				Sizzle('.totalshipping')[0].innerHTML = 'Shipping: <span>£ 0.00</span>';
				total_div.innerHTML =  'Total: <span class="ss">'+ total +'</span>';
				document.getElementById('top_cart_total').innerHTML = total;	
			} else {
				Sizzle('.totalprice1')[0].innerHTML = 'Item(s) Total: '+'<span>' + total +'</span>';
				Sizzle('.totalshipping')[0].innerHTML = 'Shipping: <span>£ 5.00</span>';
				total_div.innerHTML =  'Total: <span class="ss">'+ goods_prefix+' '+(goods_price+5).toFixed(2) +'</span>';	
				document.getElementById('top_cart_total').innerHTML = goods_prefix+' '+(goods_price+5).toFixed(2);
			}
			document.getElementById('ajax_count').innerHTML = 'Shopping Bag<span>' + all_num +'</span>';
			// document.getElementById("topcart_total").innerHTML= 'Cart <span class="cart_num"> '+ all_num + '</span> item(s)';
		}catch(e){
			//alert(e.toString());
		}
  }
  
  	//checkout 页面登陆框状态改变
	function control_loginform(reg){
	    Ajax.call('flow.php?step=checkout&reg='+reg, 'direct_shopping=1&is_ajax=1&display_consignee_form=1' , function(result) {
			// document.getElementById('flow_user_login_box').innerHTML = result;
			Sizzle('.check_left_checkout')[0].innerHTML = result.content;
			return false;
	   }, 'GET', 'JSON', true, true);
	}
	
	function display_loginform(){
		Ajax.call('flow.php?step=clear_direct_shopping', 'direct_shopping=0' , function(result) {
			document.getElementById('checkout_info').style.display = 'none';
			document.getElementById('submit_order_info_tit').className = 'mod-title';
			document.getElementById('user-login-title').className = 'mod-title mod-title1';
			document.getElementById('widget_panel').style.display = 'block';
			document.getElementById('site-title_tit').innerHTML = '';
	   }, 'POST', 'TEXT', true, true);
	}

	//设置coupons号
	function get_coupons_code(){
		var sn = document.getElementById('hidCouponcode').value;
		if(sn == ''){
			return false;
		}else{
			Ajax.call('flow.php','step=coupons_code_sn&sn='+sn,callback_coupons_code,"GET","JSON");
		}
	}
	function callback_coupons_code(test){
		if(test.state == '2'){
				document.getElementById('top_cart_total').innerHTML = test.only;
			if(test.saving_num == '0'){
				alert('Sorry, Coupon Code Invalid');
				document.getElementById('AUTO_TOTAL').innerHTML = '<span class="ss">'+ test.only +'</span>';
			}else{
				document.getElementById('totalprice1').innerHTML = test.total;
				document.getElementById('totalshipping').innerHTML = test.shipping_fee;
				try{
				document.getElementById('AUTO_TOTAL').innerHTML = 'Total:     <span class="ss">' + test.only + '</span>';	
				}catch(e){}
				try{
				document.getElementById('this_total').innerHTML = test.only;
				}catch(e){}
				document.getElementById('couponHint').innerHTML='';	
				document.getElementById('couponHint').innerHTML = '<div class="flow_coupon_success" id="check_coupon-message"><img src="themes/amoretu/images/create-success.png" width="20" height="20"/><p>code apply succesfully, please checkout</p><br class="clear"/></div>';	
			}
		}else if(test.state == '1'){
			document.getElementById('coupon_message').innerHTML = test.message;		
		}
	}
	
	function edit_cart_goods(rec_id){
		document.getElementById('cart_goods_number_label_'+rec_id).style.display = 'none';
		document.getElementById('cat_goods_color_label_'+rec_id).style.display = 'none';
		document.getElementById('cat_goods_size_label_'+rec_id).style.display = 'none';
		document.getElementById('cart_goods_number_'+rec_id).style.display = 'inline-block';
		document.getElementById('cat_goods_color_'+rec_id).style.display = 'inline-block';
		document.getElementById('cat_goods_size_'+rec_id).style.display = 'inline-block';
		document.getElementById('flowbtn-edit_'+rec_id).style.display = 'none';
		document.getElementById('flowbtn-save_'+rec_id).style.display = 'inline-block';
		document.getElementById('flowbtn-cancel_'+rec_id).style.display = 'inline-block';
		disable_size(document.getElementById('cat_goods_color_'+rec_id));
	}
	
	function save_cart_goods(rec_id){
		var num = document.getElementById('cart_goods_number_'+rec_id).value;
		var color = document.getElementById('cat_goods_color_'+rec_id).value;
		var size = document.getElementById('cat_goods_size_'+rec_id).value;
		Ajax.call('flow.php?step=cart','rec_id='+rec_id+'&num='+num+'&color='+color+'&size='+size,function(result){
			document.getElementById('flow_cart_info').outerHTML = result.cart;
			document.getElementById('mod_gift_list').outerHTML = result.gift;
		},'POST','JSON');
	}
	
	function cancel_edit_cart_goods(rec_id){
		document.getElementById('cat_goods_size_'+rec_id).style.display = 'none';
		document.getElementById('cat_goods_color_'+rec_id).style.display = 'none';
		document.getElementById('cart_goods_number_'+rec_id).style.display = 'none';
		document.getElementById('cat_goods_size_label_'+rec_id).style.display = 'inline-block';
		document.getElementById('cat_goods_color_label_'+rec_id).style.display = 'inline-block';
		document.getElementById('cart_goods_number_label_'+rec_id).style.display = 'inline-block';
		document.getElementById('flowbtn-edit_'+rec_id).style.display = 'inline-block';
		document.getElementById('flowbtn-save_'+rec_id).style.display = 'none';
		document.getElementById('flowbtn-cancel_'+rec_id).style.display = 'none';
	}
	
	function disable_size(select){
		var size = Sizzle('option:selected',select)[0].getAttribute('data-size').split(',');
		var size_select = document.getElementById(select.id.replace('color','size'));
		// console.log(size_select);
		var options = Sizzle('option',size_select);
		for(var i = 0; i < options.length; i++){
			options[i].disabled = true;
			for(var j = 0; j < size.length; j++){
				if(options[i].innerHTML == size[i]){
					options[i].disabled = false;
				}
			}
		}
		if(Sizzle('option:selected',size_select)[0].disabled){
			Sizzle('option:enabled:first',size_select)[0].selected = true
		}
	}
    
    function select_gift_color(elem,value){
        var parent = elem.parentNode.parentNode.parentNode.parentNode;
        var labels = Sizzle('.label',parent);
        for(var i = 0; i < labels.length; i++){
            removeClass(labels[i],'selected');
        }
        addClass(elem,'selected');
        Sizzle('.gift_color',parent)[0].value = value;
    }
    
    function add_gift(elem){
        var parent = elem.parentNode.parentNode.parentNode;
        var color = Sizzle('.gift_color',parent)[0].value;
        var size = Sizzle('.gift_size',parent)[0].value;
        var gift_id = Sizzle('.gift_id',parent)[0].value;
        if(color == '0'){
            addClass(Sizzle('.f_s_giftcolor',parent)[0],'error');
            return false;
        }
        removeClass(Sizzle('.f_s_giftcolor')[0],'error');
        Ajax.call('flow.php?step=cart','add_gift=1&gift_id='+gift_id+'&color='+color+'&size='+size,function(result){
			document.getElementById('flow_cart_info').outerHTML = result.cart;
			document.getElementById('mod_gift_list').outerHTML = result.gift;
		},'POST','JSON');
    }
    
    function submit_code(elem){
        var step = !elem.checked ? 'cancel_bonus':'validate_bonus';
        var code = elem.value;
        Ajax.call('flow.php?step='+step, 'bonus_sn=' + code, validateBonusResponse, 'GET', 'JSON');
    }
	
	function change_step(step,force){
		Ajax.call('flow.php?step=checkout&new_step='+step,'is_ajax=1&force='+Number(force),function(result){
			Sizzle('.check_left_checkout')[0].innerHTML = result.content;
		},'GET','JSON');
	}