function update_checkout_total() {
	Ajax.call('flow.php', 'step=checkout_total', function(result) {
		document.getElementById('checkout-total').outerHTML = result;
	}, 'GET', 'TEXT', true, true);
}

function select_shipping_address(address_id){
	Ajax.call('flow.php', 'step=select_shipping_address&address_id='+address_id, function(result) {
		if(result.length > 0){
			// document.getElementById('checkout-consignee').outerHTML = result;
            window.location.reload();
		}
	}, 'GET', 'TEXT', true, true);
}

function display_shipping_address(isnew) {
	Ajax.call('flow.php', 'step=consignee_info&isnew='+isnew, function(result) {
		document.getElementById('checkout-consignee').innerHTML = result;
	
		var header = document.getElementById('CHECKOUT_CONSIGNEE_INFO_HEADER');
		if (header.getElementsByTagName('a').length > 0) {
			header.getElementsByTagName('a')[0].style['display'] = 'none';
		}
	}, 'GET', 'TEXT', true, true);
}

window.issendrequest = false;
window.waitforshipinfo = false;
function display_checkout_panel(form) {
	if(document.getElementById('checkout_ship_info')){
		window.waitforshipinfo = true;
		update_shipping_address();
		return false;
	}
	if(!form){
		form = document.getElementById('theForm');
	}
	// try{
	// var header = document.getElementById('CHECKOUT_CONSIGNEE_INFO_HEADER');
	// if (header.getElementsByTagName('a').length > 0 ) {
		// if(header.getElementsByTagName('a')[0].style['display'] == "none"){
			// document.getElementById("yj_message").style['display'] = "block";
			// document.getElementById("yj_message").innerHTML = "You should confirm your shipping address first!";
			// return false;
			// alert("You should confirm your shipping address first!");return false;
		// }
	// }else{
			// document.getElementById("yj_message").style['display'] = "block";
			// document.getElementById("yj_message").innerHTML = "You should confirm your shipping address first!";
			// return false;
	// }}catch(e){}
	
	if(checkOrderForm(form))
	{
		//return true;
		var params = '';
		for (var i = 0, n = form.elements.length; i < n; i++) {
			if (typeof(form.elements[i].name) == 'undefined' || typeof(form.elements[i].value) == 'undefined') continue;
			if (form.elements[i].type == 'radio') {
				if (form.elements[i].checked) params += form.elements[i].name + '=' + form.elements[i].value + '&';
			} else {
				params += form.elements[i].name + '=' + form.elements[i].value + '&';
			}
		}
		// document.getElementById('BtnSubmitOrder').className = "submit-order";
		
		
		var scrollTop=0;
		if(document.documentElement&&document.documentElement.scrollTop)
		{
			scrollTop=document.documentElement.scrollTop;
		}
		else if(document.body)
		{
			scrollTop=document.body.scrollTop;
		}
		document.getElementById('BtnSubmitOrder').disabled = 'disabled';
		document.getElementById('BtnSubmitOrder').className += ' btn_disabled';
		var p = document.getElementsByTagName('body')[0];
		var wrap = document.getElementById('flow');
		wHeight = wrap.offsetHeight;
		var overlay = document.createElement('div');
		overlay.className = "over_layer";
		overlay.id = 'over_layer';
		overlay.style.height = 9999 + 'px';
		overlay.style.display = 'none';
		p.appendChild(overlay);
		var highlight = document.createElement('div');
		highlight.className = "highlight_layer";
		highlight.id = 'highlight_layer';
		highlight.style.display = 'none';
		
		p.appendChild(highlight);
		highlight.innerHTML = '<img src="themes/amoretu/images/ajax-loader.gif"/>';
		if(!window.issendrequest){
			window.issendrequest = true;
			Ajax.call('flow.php', params, function(result) {
				submit_other_info_callback(result);
			}, 'POST', 'JSON', true, true);
		}
		Sizzle('.submit-order-notice')[0].style.display = 'block';
		return false;
	}
	else
	{
		return false;
	}
}

function submit_other_info_callback(result) {
	var highlight = document.getElementById('highlight_layer');
	if(result.redirect_url){
		window.location.href = result.redirect_url;
		return false;
	}
	highlight.innerHTML = result.content + '';
	window.setTimeout(function() {
		var input = highlight.getElementsByTagName('input');
		var button = null;
		for (var i = 0; i < input.length; i++) {
			var node = input[i];
			if (node.name == 'submit') { button = node; break; }
		}
		if (button) {
			button.click();
		} else {
			highlight.getElementsByTagName('form')[0].submit();
		}
	}, 500);
}

function update_shipping_address(form) {
	try{document.getElementById("yj_message").style['display'] = "none";}catch(e){}
	if(!form){
		form = document.getElementById('checkout_ship_info');
	}
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
	
	Ajax.call('flow.php', params, function(result) {
		if(document.getElementById('registerForm')){
            window.location.reload();
            return ;
        }
        Ajax.call('flow.php?step=checkout&is_ajax=1','',function(result){
			Sizzle('.check_left_checkout')[0].innerHTML = result.content;
		},'GET','JSON',true,true);
	}, 'POST', 'TEXT', true, true);
	return false;
}