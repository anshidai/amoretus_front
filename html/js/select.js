function do_select(){
	var select_titles = Sizzle('.goodsOptions_attr');
	var max_select_width = 135;
	for(var i = 0; i< select_titles.length ; i++){
		select_titles[i].onclick = function(event){
			event = event?event:window.event;
			try{
			event.cancelBubble = true;
			event.stopPropagation();
			} catch(e){}
			var drop_down_list = this.parentNode.getElementsByTagName('ul')[0];
			var drop_down_list_display = this.parentNode.getElementsByTagName('ul')[0].style.display;
			close_selects();
			if(drop_down_list_display == 'none' || drop_down_list_display == ''){
				drop_down_list.style.display = 'block';
			} else {
				drop_down_list.style.display = 'none';
			}
			
		}
		var attr_list = select_titles[i].parentNode.getElementsByTagName('ul')[0].getElementsByTagName('a');
		for(var ii = 0 ; ii < attr_list.length ; ii++){
			if(attr_list[ii].innerHTML.length > 10){
				var width = 7*attr_list[ii].innerHTML.length+24;
				if(width > max_select_width){
					max_select_width = width;
					for(var iii = 0; iii< select_titles.length ; iii++){
						select_titles[iii].style.width = max_select_width+'px';
						select_titles[iii].parentNode.getElementsByTagName('ul')[0].style.width = max_select_width+'px';
					}
				}
			}
		}
		// if(attr_list.length == 1){
			// var first_link = attr_list[0];
			// if(first_link.click){
				// first_link.click();
			// } else {
				// var evt = document.createEvent("MouseEvents");
				// evt.initEvent("click", true, true);
				// first_link.dispatchEvent(evt);
			// }
		// }
		// eval(s);
	}
}
function change_value(key,val,ele,attr_img){
	// event = event?event:window.event;
	document.getElementById('goods_attr_'+key).value = val;
	ele.parentNode.parentNode.style.display = 'none';
	ele.parentNode.parentNode.parentNode.getElementsByTagName('div')[0].getElementsByTagName('span')[0].innerHTML = ele.innerHTML;
	var imgs = document.getElementById('item_good_imgs').getElementsByTagName('a');
	if(attr_img){
		for (var i = 0; i<imgs.length; i++){
			if(imgs[i].href.indexOf(attr_img)!=-1){
				showBigImage(i);
			}
		}
	}
	try{
		event.cancelBubble = true;
		event.stopPropagation();
	} catch(e){console.dir(e)}
}
function change_value_ab(attr_id,goods_id,value,ele){
	// event = event?event:window.event;
	document.getElementById('goods_attr_'+attr_id+'_'+goods_id).value = value;
	var spans = ele.parentNode.getElementsByTagName('span');
	for(var i =0 ;i < spans.length ;i++){
		spans[i].className = spans[i].className.replace('selected','').trim();
	}
	var imgs = ele.parentNode.getElementsByTagName('img');
	for(var i =0 ;i < imgs.length ;i++){
		imgs[i].className = imgs[i].className.replace('selected','').trim();
	}
	ele.className += ' selected';
	try{
		event.cancelBubble = true;
		event.stopPropagation();
	} catch(e){console.dir(e)}
}
function change_number(ele){
	// event = event?event:window.event;
	document.getElementById('number').value = ele.innerHTML;
	ele.parentNode.parentNode.style.display = 'none';
	if(ele.innerHTML>1){
		// document.getElementById('total_good_price').innerHTML = 'Total: &pound;'+(ele.innerHTML*window.shop_price).toFixed(2);
	} else {
		// document.getElementById('total_good_price').innerHTML = '' ;
	}
	try{
		event.cancelBubble = true;
		event.stopPropagation();
	} catch(e){console.dir(e)}
}
function close_selects(){
	var drop_downs = Sizzle('.select_drop_down');
	for(var i = 0 ;i< drop_downs.length ;i++){
		drop_downs[i].style.display = 'none';
	}
}
if(document.body){
	document.body.onclick = close_selects;
} else {
	document.documentElement.onclick = close_selects;
}
do_select();