function addToCart(a, b, c) {
	var f, g, i, j, k, l, m, n, o, p, d = document.location.href,
	e = d.indexOf("flow");
	if ( - 1 == e && addUrlToCookie(), addUrlToCookie(), f = new Object, g = new Array, new Array, i = 1, j = "", k = 0, l = c.form ? c.form: document.forms("ECS_FORMBUY")) {
		if (g = getSelectedAttributes(l), g === !1) return ! 1;
		if (l.elements.number && (i = l.elements.number.value, isNaN(parseInt(i)))) return m = document.getElementById("goods_attr_list").className,
		-1 == m.indexOf("select-none") && (document.getElementById("goods_attr_list").className = m + " select-none"),
		Sizzle(".s-none-notice")[0].innerHTML = "Please select Number",
		Sizzle(".s-none-notice")[0].style.display = "block",
		!1;
		l.elements.custName && (j = l.elements.custName.value),
		l.elements.custNum && (k = l.elements.custNum.value)
	}
	for (f.spec = g, f.goods_id = a, f.name = Sizzle(".goods_name_" + a)[0].innerHTML.replace(/(.*?)\s*\<.*/, "$1"), f.img = Sizzle(".goods_img_" + a)[0].src, f.number = i, f.unique_name = j, f.unique_number = k, f.clientTimeZone = clientTimeZone(), n = l.getElementsByTagName("span"), o = 0; o < n.length; o++) n[o].className.indexOf("goods_price") > -1 && (f.price = n[o].innerHTML);
	p = get_absolute_path(),
	f.parent = "undefined" == typeof b ? 0 : parseInt(b),
	f.with_deal_goods = document.getElementById('deal_goods') && document.getElementById('deal_goods').checked,
	window.added_goods = f,
	Sizzle(".s-none-notice")[0].innerHTML = "",
	Sizzle(".s-none-notice")[0].style.display = "none",
	Sizzle(".goods_attr_list",l)[0].className = Sizzle(".goods_attr_list",l)[0].className.replace(" select-none", ""),
	Ajax.call(p + "flow.php?step=add_to_cart", "goods=" + f.toJSONString(), addToCartResponse, "POST", "JSON")
}
function addYouMayAlsoLikeToCart(a, b, c) {
	var f, g, i, j, k, l, m, n, o, p, d = document.location.href,
	e = d.indexOf("flow");
	if ( - 1 == e && addUrlToCookie(), addUrlToCookie(), f = new Object, g = new Array, new Array, i = 1, j = "", k = 0, l = c.form ? c.form: document.forms("ECS_FORMBUY")) {
		if (g = getSelectedAttributes(l), g === !1) return ! 1;
		if (l.elements.number && (i = l.elements.number.value, isNaN(parseInt(i)))) return m = document.getElementById("goods_attr_list").className,
		-1 == m.indexOf("select-none") && (document.getElementById("goods_attr_list").className = m + " select-none"),
		Sizzle(".s-none-notice",l)[0].innerHTML = "Please select Number",
		Sizzle(".s-none-notice",l)[0].style.display = "block",
		!1;
		l.elements.custName && (j = l.elements.custName.value),
		l.elements.custNum && (k = l.elements.custNum.value)
	}
	for (f.spec = g, f.goods_id = a, f.name = Sizzle(".goods_name_" + a,l)[0].innerHTML.replace(/(.*?)\s*\<.*/, "$1"), f.img = Sizzle(".goods_img_" + a,l)[0].src, f.number = i, f.unique_name = j, f.unique_number = k, f.clientTimeZone = clientTimeZone(), n = l.getElementsByTagName("span"), o = 0; o < n.length; o++) n[o].className.indexOf("goods_price") > -1 && (f.price = n[o].innerHTML);
	p = get_absolute_path(),
	f.parent = "undefined" == typeof b ? 0 : parseInt(b),
	window.added_goods = f,
	Sizzle(".s-none-notice",l)[0].innerHTML = "",
	Sizzle(".s-none-notice",l)[0].style.display = "none",
	Sizzle(".goods_attr_list",l)[0].className = Sizzle(".goods_attr_list",l)[0].className.replace(" select-none", ""),
	Ajax.call(p + "flow.php?step=add_to_cart", "goods=" + f.toJSONString(), addToCartResponse, "POST", "JSON")
}
function addUrlToCookie() {
	var a = document.URL;
	if(a.indexOf('flow.php') == -1){
		addCookie("Continueshopping", a, 0);
	}
}
function addCookie(a, b, c) {
	var e, f, d = a + "=" + escape(b)+'; path=/';
	c > 0 && (e = new Date, f = 1e3 * 3600 * c, e.setTime(e.getTime() + f), d += "; expires=" + e.toGMTString() +'; path=/'),
	document.cookie = d
}
function getCookie(a) {
	var e, b = document.cookie,
	c = b.indexOf(a),
	d = "/";
	return - 1 != c && (c += a.length + 1, e = b.indexOf(";", c), -1 == e && (e = b.length), d = unescape(b.substring(c, e))),
	d
}
function delCookie(a) {
	var b = new Date;
	b.setTime(b.getTime() - 1e4),
	document.cookie = a + "=a; expires=" + b.toGMTString()
}
function getSelectedAttributes(a) {
	var d, e, f, b = new Array,
	c = 0;
	for (i = 0; i < a.elements.length; i++) if (d = a.elements[i].name.substr(0, 5), "spec_" == d && (("radio" == a.elements[i].type || "checkbox" == a.elements[i].type) && a.elements[i].checked || "SELECT" == a.elements[i].tagName)) {
		if (b[c] = a.elements[i].value, e = parseInt(b[c]), isNaN(e) || 0 == e) return f = Sizzle(".goods_attr_list",a)[0].className,
		-1 == f.indexOf("select-none") && (Sizzle(".goods_attr_list",a)[0].className = f + " select-none"),
		Sizzle(".s-none-notice",a)[0].innerHTML = "Please select " + b[c],
		Sizzle(".s-none-notice",a)[0].style.display = "block",
		!1;
		c++
	}
	return b
}
function addToCartResponse(a) {
	var c, d, e, b = get_absolute_path();
	if (a.error > 0) 2 == a.error ? confirm(a.message) && (location.href = b + "user.php?act=add_booking&id=" + a.goods_id) : 6 == a.error ? "undefined" == typeof a.is_package || 0 == a.is_package ? openSpeDiv(a.message, a.goods_id, 0) : openSpeDiv(a.message, a.goods_id, 1) : alert(a.message);
	else if (c = document.getElementById("ECS_CARTINFO"), d = b + "flow.php?step=cart", c && (c.innerHTML = a.content), "1" == a.one_step_buy) location.href = d;
	else switch (a.confirm_type) {
	case "1":
		confirm(a.message) && (location.href = d);
		break;
	case "2":
		confirm(a.message) || (location.href = d);
		break;
	case "3":
		if(JSON.stringify(window.attr_arr) == '{}' || document.documentElement.clientWidth < 768){
			window.location.href = window.site_path + 'flow.php';
			return ;
		}
        if(JSON.stringify(a.deal_goods) != '[]'){
            // window.added_goods.number++;
            Sizzle(".list_fixed_tit span")[0].innerHTML = (parseInt(window.added_goods.number) * 2) + " ITEM ADDED TO YOUR BAG",
            Sizzle("#added_goods_name_deal_goods")[0].innerHTML = '<img src="' + window.site_path+a.deal_goods.goods_img + '"/><span class="hidden-xs">' + a.deal_goods.goods_name + "</span>",
            Sizzle("#added_goods_price_deal_goods")[0].innerHTML = 0,
            Sizzle("#added_goods_size_deal_goods")[0].innerHTML = a.deal_goods.attr_size[0].attr_value,
            Sizzle("#added_goods_color_deal_goods")[0].innerHTML = '<img width="30px" height="30px" src="'+window.site_path+a.deal_goods.attr_color[0].attr_small_img+'"> '+a.deal_goods.attr_color[0].attr_value,
            Sizzle("#added_goods_qty_deal_goods")[0].innerHTML = parseInt(window.added_goods.number),
            Sizzle("#deal_goods_td")[0].style.display = 'table-row';
        } else {
            Sizzle("#deal_goods_td")[0].style.display = 'none';
            Sizzle(".list_fixed_tit span")[0].innerHTML = (parseInt(window.added_goods.number)) + " ITEM ADDED TO YOUR BAG";
        }
		document.getElementById("topcart").innerHTML = a.content,
		Sizzle("#added_goods_qty")[0].innerHTML = parseInt(window.added_goods.number),
		Sizzle("#added_goods_name")[0].innerHTML = '<img src="' + window.added_goods.img + '"/><span class="hidden-xs">' + window.added_goods.name + "</span>",
		Sizzle("#added_goods_color")[0].innerHTML = window.attr_arr["20_" + window.added_goods.spec[0]],
		Sizzle("#added_goods_size")[0].innerHTML = window.added_goods.spec[1] ? window.attr_arr["16_" + window.added_goods.spec[1]] : "",
		
		e = window.added_goods.price,
		Sizzle("#added_goods_price")[0].innerHTML = e[0] + (parseFloat(e.replace(e[0],'')) * window.added_goods.number).toFixed(2),
		Sizzle(".fixed_item_num span")[0].innerHTML = a.number,
		Sizzle("#fixed_AUTO_TOTAL span.ss")[0].innerHTML = a.amount_format,
		Sizzle(".over_layer")[0].style.display = "block",
		Sizzle(".list_fixed")[0].style.display = "block"
	}
}
function get_absolute_path() {
	var c, a = document.URL,
	b = new Array;
	return b = a.split("/"),
	(b[2].indexOf('192.168') > -1) ? "http://" + b[2] + "/" + b[3] + "/": "https://" + b[2] + "/"
}
function collect(a) {
	var div = a.parentNode.getElementsByTagName('div').length > 1 ? a.parentNode.getElementsByTagName('div')[1] : a.parentNode.getElementsByTagName('div')[0];
	var d = Sizzle('.lovealert');
	for(var i=0;i<d.length;i++){
		if(d[i] == div){
			continue;
		}
		d[i].style.display='none';
	}
	var id = a.parentNode.getElementsByTagName('input')[0].value;
	if(a.className.indexOf('selected') !== -1){
		var cancel_html = '<i></i><strong>UNLIKED?</strong><p>Are you sure you want to remove this item from your Wish List</p>'
						+ '<a href="#" onclick="del_collect_by_goods_id(this);return false;" class="sign-in-button overlay" target="_self"><span>Yes! Remove</span></a>'
						+ '<a href="#" onclick="this.parentNode.style.display = \'none\';return false;" class="cancel_wishbtn" target="_self"><span>Never Mind!</span></a>';
		if(div.innerHTML != cancel_html){
			div.innerHTML = cancel_html;
			div.style.display = 'block';
			clearTimeout(window.hide_tips);
			window.hide_tips = setTimeout(function(){
									var d = Sizzle('.lovealert');
									for(var i=0;i<d.length;i++){
										d[i].style.display='none';
									}
								},5000);
			return ;
		}
		if(div.style.display == 'block'){
			del_collect_by_goods_id(a);
			div.style.display = 'none';
		} else {
			div.style.display = 'block';
			clearTimeout(window.hide_tips);
			window.hide_tips = setTimeout(function(){
									var d = Sizzle('.lovealert');
									for(var i=0;i<d.length;i++){
										d[i].style.display='none';
									}
								},5000);
		}
	} else {
		Ajax.call(get_absolute_path()+"user.php?act=collect", "id=" + id, collectResponse, "GET", "JSON")
	}
}
function collectResponse(a) {
	var icon = document.getElementById('collect_icon_'+a.goods_id);
	var ul = icon.parentNode;
	if(parseInt(a.error) === 1){
		Sizzle('.lovealert',ul)[0].innerHTML = '<i></i><strong>LIKE IT!</strong><p>Please longin to save your wish List</p>'
												+'<a href="" class="sign-in-button overlay" target="_self"><span>Login</span></a>';
		Sizzle('.lovealert',ul)[0].style.display = 'block';
		clearTimeout(window.hide_tips);
		window.hide_tips = setTimeout(function(){
								var d = Sizzle('.lovealert');
								for(var i=0;i<d.length;i++){
									d[i].style.display='none';
								}
							},5000);
		if(icon && icon.className.indexOf('selected') == -1){
			icon.className += ' selected';	
		}
	}
	if(!a.error){
		if(icon && icon.className.indexOf('selected') == -1){
			icon.className += ' selected';	
		}
		if(Sizzle('.lovealert',ul)[0].className.indexOf('unlovealert') == -1){
			Sizzle('.lovealert',ul)[0].className += ' unlovealert';
		}
		Sizzle('.lovealert',ul)[0].innerHTML = '<i></i><strong>UNLIKED?</strong><p>Are you sure you want to remove this item from your Wish List</p>'
												+ '<a href="#" onclick="del_collect_by_goods_id(this);return false;" class="sign-in-button overlay" target="_self"><span>Yes! Remove</span></a>'
												+ '<a href="#" onclick="this.parentNode.style.display = \'none\';return false;" class="cancel_wishbtn" target="_self"><span>Never Mind!</span></a>';
	}
	var num = parseInt(document.getElementById('header_wish_count').innerHTML);
	document.getElementById('header_wish_count').innerHTML = num + 1;
}

function del_collect_by_goods_id(a){
	if(a.parentNode.tagName.toLowerCase() == 'li'){
		var id = a.parentNode.getElementsByTagName('input')[0].value;
	} else {
		var id = a.parentNode.parentNode.getElementsByTagName('input')[0].value;
	}
	Ajax.call(get_absolute_path()+"user.php?act=delete_collection&ajax=1", "goods_id=" + id, function(data){
		if(data.goods_id){
			var icon = document.getElementById('collect_icon_'+data.goods_id);
			var ul = icon.parentNode;									
			var d = Sizzle('.lovealert');
			for(var i=0;i<d.length;i++){
				d[i].style.display='none';
			}
			icon.className = icon.className.replace(' selected','');
			if(window.location.href.indexOf('user.php') != -1){
				ul.style.display = 'none';
			}
			var num = parseInt(document.getElementById('header_wish_count').innerHTML);
			document.getElementById('header_wish_count').innerHTML = num - 1;
		}
	}, "GET", "JSON")
}
function signInResponse(a) {
	var b, c;
	toggleLoader(!1),
	b = a.substr(0, 1),
	c = a.substr(2),
	1 == b ? document.getElementById("member-zone").innerHTML = c: alert(c)
}
function gotoPage(a, b, c) {
	Ajax.call(get_absolute_path()+"comment.php?act=gotopage", "page=" + a + "&id=" + b + "&type=" + c, gotoPageResponse, "GET", "JSON")
}
function gotoPageResponse(a) {
	document.getElementById("ECS_COMMENT").innerHTML = a.content
}
function getFormatedPrice(a) {
	return currencyFormat.indexOf("%s") > -1 ? currencyFormat.replace("%s", advFormatNumber(a, 2)) : currencyFormat.indexOf("%d") > -1 ? currencyFormat.replace("%d", advFormatNumber(a, 0)) : a
}
function bid(a) {
	var d, e, b = "",
	c = "";
	return - 1 != a ? (d = document.forms.formBid, b = d.elements.price.value, id = d.elements.snatch_id.value, 0 == b.length ? c += price_not_null + "\n": (e = /^[\.0-9]+/, e.test(b) || (c += price_not_number + "\n"))) : b = a,
	c.length > 0 ? (alert(c), void 0) : (Ajax.call("snatch.php?act=bid&id=" + id, "price=" + b, bidResponse, "POST", "JSON"), void 0)
}
function bidResponse(a) {
	0 == a.error ? (document.getElementById("ECS_SNATCH").innerHTML = a.content, document.forms.formBid && document.forms.formBid.elements.price.focus(), newPrice()) : alert(a.content)
}
function newPrice(a) {
	Ajax.call("snatch.php?act=new_price_list&id=" + a, "", newPriceResponse, "GET", "TEXT")
}
function newPriceResponse(a) {
	document.getElementById("ECS_PRICE_LIST").innerHTML = a
}
function getAttr(a) {
	var c, b = document.getElementsByTagName("tbody");
	for (i = 0; i < b.length; i++)"goods_type" == b[i].id.substr(0, 10) && (b[i].style.display = "none");
	c = "goods_type_" + a;
	try {
		document.getElementById(c).style.display = ""
	} catch(d) {}
}
function advFormatNumber(a, b) {
	var e, f, g, h, i, c = formatNumber(a, b),
	d = parseFloat(c);
	if (a.toString().length > c.length) {
		if (e = a.toString().substring(c.length, c.length + 1), f = parseFloat(e), 5 > f) return c;
		if (0 == b) h = 1;
		else {
			for (g = "0.", i = 1; b > i; i++) g += "0";
			g += "1",
			h = parseFloat(g)
		}
		c = formatNumber(d + h, b)
	}
	return c
}
function formatNumber(a, b) {
	var c, d, e, f;
	if (c = a.toString(), d = c.indexOf("."), e = c.length, 0 == b) - 1 != d && (c = c.substring(0, d));
	else if ( - 1 == d) for (c += ".", f = 1; b >= f; f++) c += "0";
	else for (c = c.substring(0, d + b + 1), f = e; d + b >= f; f++) c += "0";
	return c
}
function set_insure_status() {
	var a = getRadioValue("shipping"),
	b = 0;
	a > 0 && (document.forms.theForm.elements["insure_" + a] && (b = document.forms.theForm.elements["insure_" + a].value), document.forms.theForm.elements.need_insure && (document.forms.theForm.elements.need_insure.checked = !1), document.getElementById("ecs_insure_cell") && (b > 0 ? (document.getElementById("ecs_insure_cell").style.display = "", setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(b))) : (document.getElementById("ecs_insure_cell").style.display = "none", setValue(document.getElementById("ecs_insure_fee_cell"), ""))))
}
function changePayment() {
	calculateOrderFee()
}
function getCoordinate(a) {
	var b = {
		x: 0,
		y: 0
	};
	b.x = document.body.offsetLeft,
	b.y = document.body.offsetTop;
	do b.x += a.offsetLeft,
	b.y += a.offsetTop,
	a = a.offsetParent;
	while ("BODY" != a.tagName.toUpperCase());
	return b
}
function showCatalog(a) {
	var b = getCoordinate(a),
	c = document.getElementById("ECS_CATALOG");
	c && "block" != c.style.display && (c.style.display = "block", c.style.left = b.x + "px", c.style.top = b.y + a.offsetHeight - 1 + "px")
}
function hideCatalog() {
	var b = document.getElementById("ECS_CATALOG");
	b && "none" != b.style.display && (b.style.display = "none")
}
function sendHashMail() {
	Ajax.call("user.php?act=send_hash_mail", "", sendHashMailResponse, "GET", "JSON")
}
function sendHashMailResponse(a) {
	alert(a.message)
}
function orderQuery() {
	var a = document.forms.ecsOrderQuery.order_sn.value,
	b = /^[\.0-9]+/;
	return a.length < 10 || !b.test(a) ? (alert(invalid_order_sn), void 0) : (Ajax.call("user.php?act=order_query&order_sn=s" + a, "", orderQueryResponse, "GET", "JSON"), void 0)
}
function orderQueryResponse(a) {
	if (a.message.length > 0 && alert(a.message), 0 == a.error) {
		var b = document.getElementById("ECS_ORDER_QUERY");
		b.innerHTML = a.content
	}
}
function display_mode(a) {
	function b() {
		document.forms.listform.submit()
	}
	document.getElementById("display").value = a,
	setTimeout(b, 0)
}
function fixpng() {
	var c, d, e, f, g, h, i, j, a = navigator.appVersion.split("MSIE"),
	b = parseFloat(a[1]);
	if (b >= 5.5 && document.body.filters) for (c = 0; c < document.images.length; c++) d = document.images[c],
	e = d.src.toUpperCase(),
	"PNG" == e.substring(e.length - 3, e.length) && (f = d.id ? "id='" + d.id + "' ": "", g = d.className ? "class='" + d.className + "' ": "", h = d.title ? "title='" + d.title + "' ": "title='" + d.alt + "' ", i = "display:inline-block;" + d.style.cssText, "left" == d.align && (i = "float:left;" + i), "right" == d.align && (i = "float:right;" + i), d.parentElement.href && (i = "cursor:hand;" + i), j = "<span " + f + g + h + ' style="' + "width:" + d.width + "px; height:" + d.height + "px;" + i + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src='" + d.src + "', sizingMethod='scale');\"></span>", d.outerHTML = j, c -= 1)
}
function hash(a, b) {
	var c, d, e;
	for (b = b ? b: 32, c = 0, d = 0, e = "", filllen = b - a.length % b, d = 0; filllen > d; d++) a += "0";
	for (; c < a.length;) e = stringxor(e, a.substr(c, b)),
	c += b;
	return e
}
function stringxor(a, b) {
	var f, g, c = "",
	d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	e = Math.max(a.length, b.length);
	for (f = 0; e > f; f++) g = a.charCodeAt(f) ^ b.charCodeAt(f),
	c += d.charAt(g % 52);
	return c
}
function evalscript(a) {
	var b, c;
	if ( - 1 == a.indexOf("<script")) return a;
	for (b = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/gi, c = new Array; c = b.exec(a);) appendscript(c[1], "", c[2], c[3]);
	return a
}
function $$(a) {
	return document.getElementById(a)
}
function appendscript(a, b, c) {
	var f, e = hash(a + b);
	if (c || !in_array(e, evalscripts)) {
		c && $$(e) && $$(e).parentNode.removeChild($$(e)),
		evalscripts.push(e),
		f = document.createElement("script"),
		f.type = "text/javascript",
		f.id = e;
		try {
			a ? f.src = a: b && (f.text = b),
			$$("append_parent").appendChild(f)
		} catch(g) {}
	}
}
function in_array(a, b) {
	if ("string" == typeof a || "number" == typeof a) for (var c in b) if (b[c] == a) return ! 0;
	return ! 1
}
function pmwin(a, b) {
	var d, e, f, g, h, c = document.getElementsByTagName("OBJECT");
	if ("open" == a) {
		for (i = 0; i < c.length; i++)"hidden" != c[i].style.visibility && (c[i].setAttribute("oldvisibility", c[i].style.visibility), c[i].style.visibility = "hidden");
		d = document.body.clientWidth,
		e = document.documentElement.clientHeight ? document.documentElement.clientHeight: document.body.clientHeight,
		f = document.body.scrollTop ? document.body.scrollTop: document.documentElement.scrollTop,
		g = 800,
		h = .9 * e,
		$$("pmlayer") || (div = document.createElement("div"), div.id = "pmlayer", div.style.width = g + "px", div.style.height = h + "px", div.style.left = (d - g) / 2 + "px", div.style.position = "absolute", div.style.zIndex = "999", $$("append_parent").appendChild(div), $$("pmlayer").innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left"><div style="width: 800px; height: ' + h + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' + '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' + '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="关闭" /></a>' + '<iframe id="pmframe" name="pmframe" style="width:' + g + 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>'),
		$$("pmlayer").style.display = "",
		$$("pmlayer").style.top = (e - h) / 2 + f + "px",
		pmframe.location = b ? "pm.php?" + b: "pm.php"
	} else if ("close" == a) {
		for (i = 0; i < c.length; i++) c[i].attributes.oldvisibility && (c[i].style.visibility = c[i].attributes.oldvisibility.nodeValue, c[i].removeAttribute("oldvisibility"));
		hiddenobj = new Array,
		$$("pmlayer").style.display = "none"
	}
}
function pmwindrag(a, b) {
	if (1 == b) pmwindragstart = is_ie ? [event.clientX, event.clientY] : [a.clientX, a.clientY],
	pmwindragstart[2] = parseInt($$("pmlayer").style.left),
	pmwindragstart[3] = parseInt($$("pmlayer").style.top),
	doane(a);
	else if (2 == b && pmwindragstart[0]) {
		var c = is_ie ? [event.clientX, event.clientY] : [a.clientX, a.clientY];
		$$("pmlayer").style.left = pmwindragstart[2] + c[0] - pmwindragstart[0] + "px",
		$$("pmlayer").style.top = pmwindragstart[3] + c[1] - pmwindragstart[1] + "px",
		doane(a)
	} else 3 == b && (pmwindragstart = [], doane(a))
}
function doane(a) {
	e = a ? a: window.event,
	is_ie ? (e.returnValue = !1, e.cancelBubble = !0) : e && (e.stopPropagation(), e.preventDefault())
}
function addPackageToCart(a) {
	var b, c, d;
	addUrlToCookie(),
	b = new Object,
	c = 1,
	b.package_id = a,
	b.number = c,
	d = get_package_goods_attr(a),
	b.package_attr = d,
	b.clientTimeZone = clientTimeZone(),
	Ajax.call("flow.php?step=add_package_to_cart", "package_info=" + b.toJSONString(), addPackageToCartResponse, "POST", "JSON")
}
function addPackageToCartResponse(a) {
	var b, c;
	if (a.error > 0) 2 == a.error ? confirm(a.message) && (location.href = "user.php?act=add_booking&id=" + a.goods_id) : alert(a.message);
	else if (b = document.getElementById("ECS_CARTINFO"), c = "flow.php?step=cart", b && (b.innerHTML = a.content), "1" == a.one_step_buy) location.href = c;
	else switch (a.confirm_type) {
	case "1":
		confirm(a.message) && (location.href = c);
		break;
	case "2":
		confirm(a.message) || (location.href = c);
		break;
	case "3":
		location.href = c
	}
}
function setSuitShow(a) {
	var b = document.getElementById("suit_" + a);
	null != b && (b.style.display = "none" == b.style.display ? "": "none")
}
function docEle() {
	return document.getElementById(arguments[0]) || !1
}
function openSpeDiv(a, b, c) {
	var f, g, h, i, j, k, l, m, n, d = "speDiv",
	e = "mask";
	for (docEle(d) && document.removeChild(docEle(d)), docEle(e) && document.removeChild(docEle(e)), "undefined" != typeof window.pageYOffset ? f = window.pageYOffset: "undefined" != typeof document.compatMode && "BackCompat" != document.compatMode ? f = document.documentElement.scrollTop: "undefined" != typeof document.body && (f = document.body.scrollTop), g = 0, h = document.getElementsByTagName("select"); h[g];) h[g].style.visibility = "hidden",
	g++;
	if (i = document.createElement("div"), i.id = d, i.style.position = "absolute", i.style.zIndex = "10000", i.style.top = parseInt(f + 200) + "px", i.style.left = (parseInt(document.body.offsetWidth) - 200) / 2 + "px", i.style.overflow = "auto", i.style.background = "#FFF", 1 == c) {
		for (j = '<h4 style="font-size:14; margin:15 0 0 15;">' + select_spe + "</h4>", k = 0, l = 0; l < a.length; l++) {
			for (k = a[l].package_id, j += '<div class="packgoods"><strong>', j += '<a target="_blank" style="color: rgb(87, 142, 0);" href="' + a[l].goods_url + '"><font class="f1">' + a[l].goods_name + "</font></a>", j += "</strong>&nbsp;&nbsp;X 1<br />", j += '<form id="' + a[l].goods_id + '"><li class="padd loop"><strong>' + a[l].name + "</strong>", j += '<select name="properties_spec_' + a[l].attr_id + '">', m = 0; m < a[l].values.length; m++) j += '<option value="' + a[l].values[m].id + '" label="' + a[l].values[m].label + '">' + a[l].values[m].label + "</option>";
			j += "</select>",
			j += "<input type='hidden' name='spec_list' value='" + m + "' />",
			j += "</li></form></div>"
		}
		j += "<br /><center>[<a href='javascript:submit_package_div(" + k + ")' class='f6' >" + btn_buy + "</a>]&nbsp;&nbsp;[<a href='javascript:cancel_div()' class='f6' >" + is_cancel + "</a>]</center>",
		j = '<div id="package_goods_' + k + '">' + j + "</div>",
		i.innerHTML = j
	} else if ("" == a[0].values[0].label) i.style.display = "none",
	i.innerHTML += "<input style='margin-left:15px;' type='radio' checked='checked'  name='spec_" + a[0].attr_id + "' value='" + a[0].values[0].id + "' id='spec_value_" + a[0].values[0].id + "' /><font color=#555555>" + a[0].values[0].label + "</font></font><br />",
	document.body.appendChild(i),
	submit_div(b);
	else {
		for (i.innerHTML = '<h4 style="font-size:14; margin:15 0 0 15;">' + select_spe + "</h4>", l = 0; l < a.length; l++) if (i.innerHTML += '<hr style="color: #EBEBED; height:1px; margin:15px 0 10px; _margin:0;"><h6 style="text-align:left; background:#ffffff; margin-left:50px;">Specifications</h6>', 1 == a[l].attr_type) {
			for (m = 0; m < a[l].values.length; m++) i.innerHTML += "<input style='margin:-5px 5px 0 55px;_margin-right:0px 0px 0 55px;' type='radio' name='spec_" + a[l].attr_id + "' value='" + a[l].values[m].id + "' id='spec_value_" + a[l].values[m].id + "' /><font color=#555555>" + a[l].values[m].label + "</font></font><br />";
			i.innerHTML += "<input type='hidden' name='spec_list' value='" + m + "' />"
		} else {
			for (m = 0; m < a[l].values.length; m++) i.innerHTML += "<input style='margin-left:55px;' type='checkbox' name='spec_" + a[l].attr_id + "' value='" + a[l].values[m].id + "' id='spec_value_" + a[l].values[m].id + "' /><font color=#555555>" + a[l].values[m].label + "</font><br />";
			i.innerHTML += "<input type='hidden' name='spec_list' value='" + m + "' />"
		}
		i.innerHTML += "<br /><center><a href='javascript:submit_div(" + b + ")' class='btn_buy' >" + btn_buy + "</a>&nbsp;&nbsp;<a href='javascript:cancel_div()' class='Cancel' >" + is_cancel + "</a></center>"
	}
	document.body.appendChild(i),
	n = document.createElement("div"),
	n.id = e,
	n.style.position = "absolute",
	n.style.zIndex = "9999",
	n.style.width = document.body.scrollWidth + "px",
	n.style.height = document.body.scrollHeight + "px",
	n.style.top = "0px",
	n.style.left = "0px",
	n.style.background = "#FFF",
	n.style.filter = "alpha(opacity=30)",
	n.style.opacity = "0.40",
	document.body.appendChild(n)
}
function submit_div(a) {
	var e, f, g, h, i, j, b = new Object,
	c = new Array;
	for (new Array, e = 1, f = document.getElementsByTagName("input"), c = new Array, g = 0, i = 0; i < f.length; i++) h = f[i].name.substr(0, 5),
	"spec_" != h || "radio" != f[i].type && "checkbox" != f[i].type || !f[i].checked || (c[g] = f[i].value, g++);
	for (b.spec = c, b.goods_id = a, b.number = e, b.parent = "undefined" == typeof parentId ? 0 : parseInt(parentId), Ajax.call("flow.php?step=add_to_cart", "goods=" + b.toJSONString(), addToCartResponse, "POST", "JSON"), document.body.removeChild(docEle("speDiv")), document.body.removeChild(docEle("mask")), i = 0, j = document.getElementsByTagName("select"); j[i];) j[i].style.visibility = "",
	i++
}
function cancel_div() {
	var a, b;
	for (document.body.removeChild(docEle("speDiv")), document.body.removeChild(docEle("mask")), a = 0, b = document.getElementsByTagName("select"); b[a];) b[a].style.visibility = "",
	a++
}
function clientTimeZone() {
	var a = (new Date).getTimezoneOffset(),
	b = parseInt(a / 60),
	c = a % 60,
	d = "0";
	return (0 > b || 0 > c) && (d = "1", b = -b, 0 > c && (c = -c)),
	b += "",
	c += "",
	1 == b.length && (b = "0" + b),
	1 == c.length && (c = "0" + c),
	d + b + c
}
function getElementsByClassName(a, b, c) {
	var f, g, h, d = "*" == b && a.all ? a.all: a.getElementsByTagName(b),
	e = new Array;
	for (c = c.replace(/\-/g, "\\-"), f = new RegExp("(^|\\s)" + c + "(\\s|$)"), h = 0; h < d.length; h++) g = d[h],
	f.test(g.className) && e.push(g);
	return e
}
function getNav() {
	var c, a = getElementsByClassName(document, "div", "nav-main")[0],
	b = a.getElementsByTagName("li");
	for (c = 0; c < b.length; c++) b[c].onmouseover = function() {
		var b, c, d, a = getElementsByClassName(this, "div", "navup");
		for (a.length > 0 && (a = a[0], a.style.display = "block"), b = document.getElementsByTagName("select"), c = 0, d = b.length; d > c; c++) b[c].style.display = ""
	},
	b[c].onmouseout = function() {
		var b, c, d, a = getElementsByClassName(this, "div", "navup");
		for (a.length > 0 && (a = a[0], a.style.display = "none"), b = document.getElementsByTagName("select"), c = 0, d = b.length; d > c; c++) b[c].style.display = "inline"
	}
}
function get_package_goods_attr(a) {
	var f, g, h, i, j, b = document.getElementById("package_goods_" + a),
	c = b.getElementsByTagName("form"),
	d = c.length,
	e = "{";
	for (f = 0; d > f; f++) {
		for (e += '"' + c[f].id + '"' + ":[", g = c[f].getElementsByTagName("input"), h = 0; h < g.length; h++)"checkbox" == g[h].type && g[h].checked && (e += g[h].value, e += h < g.length - 1 ? ",": "");
		for (i = c[f].getElementsByTagName("select"), j = 0; j < i.length; j++) e += i[j].value,
		e += j < i.length - 1 ? ",": "";
		e += d - 1 > f ? "],": "]"
	}
	return e += "}"
}
function submit_package_div(a) {
	var d, e, b = new Object,
	c = 1;
	for (b.package_id = a, b.number = c, b.package_attr = get_package_goods_attr(a), Ajax.call("flow.php?step=add_package_to_cart", "package_info=" + b.toJSONString(), addPackageToCartResponse, "POST", "JSON"), document.body.removeChild(docEle("speDiv")), document.body.removeChild(docEle("mask")), d = 0, e = document.getElementsByTagName("select"); e[d];) e[d].style.visibility = "",
	d++
}
function UrlEncode(a) {
	return transform(a)
}
function transform(a) {
	var c, e, b = "";
	for (c = 0; c < a.length; c++) e = hexfromdec(a.charCodeAt(c)),
	"25" == e && (e = ""),
	b += "%" + e;
	return b
}
function hexfromdec(a) {
	return a > 65535 ? "err!": (first = Math.round(a / 4096 - .5), temp1 = a - 4096 * first, second = Math.round(temp1 / 256 - .5), temp2 = temp1 - 256 * second, third = Math.round(temp2 / 16 - .5), fourth = temp2 - 16 * third, "" + getletter(third) + getletter(fourth))
}
function getletter(a) {
	return 10 > a ? a: 10 == a ? "A": 11 == a ? "B": 12 == a ? "C": 13 == a ? "D": 14 == a ? "E": 15 == a ? "F": void 0
}
function Change_currency(a) {
	thisSLoc = UrlEncode(self.location.href);
	if(window.site_path){
		window.location.href = window.site_path +"Change.php?values=" + a + "&Url=" + thisSLoc
	} else {
		window.location.href = "Change.php?values=" + a + "&Url=" + thisSLoc
	}
}
function update_top_cart(a, b) {
	var c = get_absolute_path();
	clearTimeout(window.updatecarttime),
	window.updatecarttime = setTimeout(function() {
		return isNaN(parseInt(a.value)) ? !1 : 0 == parseInt(a.value) ? !1 : (Ajax.call(c + "flow.php?step=update_cart_qty&id=" + b + "&qty=" + a.value, "", update_top_cart_callback, "GET", "JSON"), !1)
	},
	800)
}
function update_top_cart_callback(a) {
	var b, d;
	document.getElementById("topcart").innerHTML = a.contents;
	try {
		for (b = 0; b < a.goods_list.length; b++) document.getElementById("goods_number_" + a.goods_list[b].rec_id).value = a.goods_list[b].goods_number,
		document.getElementById("goods_number[" + a.goods_list[b].rec_id + "]_price").innerHTML = a.goods_list[b].subtotal
	} catch(c) {}
	try {
		d = document.getElementById("cart_total"),
		d.innerHTML = '<li class="totalprice1">Item(s) Total: <span id="totalprice1">' + a.total.goods_price + '</span></li><li class="totalshipping">Shipping: <span id="totalshipping">' + a.shipping_fee + '</span></li><li><p id="AUTO_TOTAL">Total:     <span class="ss">' + a.only + "</span></p>"
	} catch(c) {}
}
function top_cart_scr_up() {
	document.getElementById("top_cart_list").scrollTop -= 96,
	document.getElementById("btn_down").className = "btn_down",
	0 == document.getElementById("top_cart_list").scrollTop && (document.getElementById("btn_up").className = "btn_up disabled")
}
function top_cart_scr_down() {
	document.getElementById("top_cart_list").scrollTop += 96,
	document.getElementById("btn_up").className = "btn_up",
	document.getElementById("top_cart_list").scrollTop + document.getElementById("top_cart_list").clientHeight == document.getElementById("top_cart_list").getElementsByTagName("ul")[0].clientHeight && (document.getElementById("btn_down").className = "btn_down disabled")
}
function dg_callback(a) {
	document.getElementById("topcart").innerHTML = a
}
function drop_goods(a) {
	var b = get_absolute_path();
	Ajax.call(b + "flow.php?step=drop_goods_ajax&id=" + a, "", dg_callback, "GET", "TEXT")
}
function as_callback(a) {
	document.getElementById("topcart").innerHTML = a.contents
}
function qty_add(a) {
	var b = parseInt(document.getElementById("top_cart_qty_" + a).value);
	return isNaN(b) ? !1 : (Ajax.call("flow.php?step=update_cart_qty&id=" + a + "&qty=" + (b + 1), "", as_callback, "GET", "JSON"), void 0)
}
function qty_subs(a) {
	var b = parseInt(document.getElementById("top_cart_qty_" + a).value);
	return isNaN(b) || 1 >= b ? !1 : (Ajax.call("flow.php?step=update_cart_qty&id=" + a + "&qty=" + (b - 1), "", as_callback, "GET", "JSON"), void 0)
}
var timezone = clientTimeZone(),
evalscripts = new Array,
pmwinposition = new Array,
userAgent = navigator.userAgent.toLowerCase(),
is_opera = -1 != userAgent.indexOf("opera") && opera.version(),
is_moz = "Gecko" == navigator.product && userAgent.substr(userAgent.indexOf("firefox") + 8, 3),
is_ie = -1 != userAgent.indexOf("msie") && !is_opera && userAgent.substr(userAgent.indexOf("msie") + 5, 3),
pmwindragstart = new Array;
window.updatecarttime = 0,
function() {
	window.is_send_request = !1,
	window.onscroll = function() {
		if(document.getElementById("litb-icon-back-to-top")){
			var d, a = document.documentElement.offsetHeight || document.body.offsetHeight,
			b = document.documentElement.scrollTop || document.body.scrollTop,
			c = document.documentElement.clientHeight;
			document.getElementById("litb-icon-back-to-top").style.display = c > b ? "none": "block",
			b + c >= a - 300 ? (d = 300 - (a - (b + c)), document.getElementById("litb-icon-back-to-top").style.bottom = d >= 89 ? d + "px": "89px") : document.getElementById("litb-icon-back-to-top").style.bottom = "89px"
		}
	}
} ();

addUrlToCookie()

function submit_email(){
	var email = document.getElementById('email-Subscribe-input').value;
	if(!Utils.isEmail(email)){
		var email_Subscribe_notice = document.getElementById('email_Subscribe_notice');
		if(email_Subscribe_notice.className.indexOf('error') === -1){
			email_Subscribe_notice.className += ' error';
		}
		email_Subscribe_notice.innerHTML = 'Please Enter a Valid Email Address';
		email_Subscribe_notice.style.display = 'block';
		return false;
	}
	var url = 'user.php?act=email_list&job=add&email='+email;
	if(window.site_path){
		url = window.site_path + url;
	}
	Ajax.call(url,'',function(result){
		var email_Subscribe_notice = document.getElementById('email_Subscribe_notice');
		email_Subscribe_notice.innerHTML = 'Congratulations! Subscribe to Our Newsletter Successfully';
		email_Subscribe_notice.className = email_Subscribe_notice.className.replace(' error','');
		email_Subscribe_notice.style.display = 'block';
	});
	return false;
}

function load_preview(url){
	Ajax.call(url,'',function(data){
		var d = document.createElement('div');
		d.innerHTML = stripAndExecuteScript(data);
		var g = document.getElementById('quick_view_content');
		while( g.hasChildNodes() ){
			g.removeChild(g.lastChild);
		}
		g.appendChild(d);
		var codes = d.getElementsByTagName("script");   
		for(var i=0;i<codes.length;i++){
		   eval(codes[i].text);  
		}
		var colour_list_selected = Sizzle('#colour_list .selected span');
		if(colour_list_selected.length > 0){
			document.getElementById('select_color_value').innerHTML = colour_list_selected[1].innerHTML;
		}
		var size_list_selected = Sizzle('#size_list .selected span');
		if(size_list_selected.length > 0){
			document.getElementById('selected_size').innerHTML = size_list_selected[0].innerHTML;
		}
		do_select();
		Sizzle(".list_fixed_tit span")[0].innerHTML = 'QUICK VIEW';
		Sizzle('.fixed_item_info')[0].style.display = 'block';
		Sizzle('.over_layer')[0].style.display = 'block';
	});
}
function stripAndExecuteScript(text) {
    var scripts = '';
    var cleaned = text.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(){
        scripts += arguments[1] + '\n';
        return '';
    });

    if (window.execScript){
        window.execScript(scripts);
    } else {
        var head = document.getElementsByTagName('head')[0];
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.innerText = scripts;
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
    }
    return cleaned;
}

function addClass(elem,className){
    if(elem.className.indexOf(className) == -1){
        elem.className += ' '+className;
    }
}

function removeClass(elem,className){
    var classes = elem.className.split(' ');
    for(var i = 0; i < classes.length; i++){
        if(classes[i] == className){
            delete classes[i];
        }
    }
    elem.className = classes.join(' ');
}
function hasClass(elem,className){
    return elem.className.indexOf(className) > -1;
}
function get_filter_str(){
	var lis = Sizzle('#cat_filter .selected');
	var attrs = {};
	var prices = [];
	for(var i = 0; i < lis.length; i++){
		if(hasClass(lis[i],'price')){
			prices.push([lis[i].getAttribute('data-from'),lis[i].getAttribute('data-to')]);
			continue;
		}
		var attr_id = lis[i].getAttribute('data-attr_id');
		var attr_value = lis[i].getAttribute('data-attr_value');
		if(!attrs[attr_id]){
			attrs[attr_id] = [];
		}
		attrs[attr_id].push(attr_value);
	}
	var str = [];
	for(var i in attrs){
		if(!parseInt(i)){
			continue;
		}
		str.push('filter_'+i+'='+attrs[i].join(','));
	}
	for(var i = 0; i < prices.length; i++){
		str.push('prices[]='+prices[i].join(','));
	}
	return str.join('&');
}
function replace_content(data){
	document.getElementById('list-item').innerHTML =  data.goods_list;
	if(document.getElementById('fromto')){
		document.getElementById('fromto').innerHTML = data.fromto;
	}
	if(data.is_end){
		document.getElementById('g-show-more').style.display = 'none';
	} else {
		document.getElementById('g-show-more').style.display = 'block';
	}
	document.getElementById('all_count').innerHTML =  data.count;
}
function show_child_nav(elem){
	if(elem.className == 'show_nav'){
		Sizzle('.navup',elem.parentNode.parentNode)[0].style.display = 'block';
		elem.className = 'hide_nav';
	} else {
		Sizzle('.navup',elem.parentNode.parentNode)[0].style.display = 'none';
		elem.className = 'show_nav';
	}
}

// delCookie('screenWidth');
addCookie('screenWidth',document.documentElement.clientWidth,0);
// if(typeof(window.onresize) == 'function'){
	// var _window_resize = window.onresize;
	// window.onresize = function(){
		
	// }
// }
