function reg(str){
  var bt=$(str+"_b").getElementsByTagName("h2");
  for(var i=0;i<bt.length;i++){
    bt[i].subj=str;
    bt[i].pai=i;
    bt[i].style.cursor="pointer";
    bt[i].onclick=function(){
      $(this.subj+"_v").innerHTML=$(this.subj+"_h").getElementsByTagName("blockquote")[this.pai].innerHTML;
      for(var j=0;j<$(this.subj+"_b").getElementsByTagName("h2").length;j++){
        var _bt=$(this.subj+"_b").getElementsByTagName("h2")[j];
        var ison=j==this.pai;
        _bt.className=(ison?"tab-title-" + (j+1): "h2bg tab-title-" + (j+1) );
      }
    }
  }
  $(str+"_h").style.display = "none";
  $(str+"_v").innerHTML=$(str+"_h").getElementsByTagName("blockquote")[0].innerHTML;
}


	function set4(id){
		var arr =new Array();
		arr[0] = new Array('web_hy','ul_web_hy');
		<!--arr[1] = new Array('web_zl','ul_web_zl');-->
		<!--arr[1] = new Array('web_mt','ul_web_mt');-->
		arr[1] = new Array('web_zonghe','ul_web_zonghe');
		arr[2] = new Array('web_shipping','ul_web_shipping');
		arr[3] = new Array('web_payment','ul_web_payment');
		var len = arr.length;
		for(var i=0;i<len;i++){
			if(i==id){
				document.getElementById(arr[i][0]).className="select";
				document.getElementById(arr[i][1]).style.display="";
			}else{
				document.getElementById(arr[i][0]).className="";
				document.getElementById(arr[i][1]).style.display="none";
			}
		}
	}

var myTimer;
          var toLeft=0;
          function moveNext()
          {
            var e = document.getElementById("gallery-list");
            toLeft = e.scrollLeft+94;
            if(myTimer)return;
            myTimer = setInterval(function(){
               moveTo("next");
            },1);
          }
          function movePrev()
          {
            var e = document.getElementById("gallery-list");
            if(e.scrollLeft<=0)return;
            toLeft = e.scrollLeft-94;
            if(myTimer)return;
            myTimer = setInterval(function(){
               moveTo("prev");
            },2);
          }
          function moveTo(action){
             var e = document.getElementById("gallery-list");
             if(myTimer){
               if(action=="next"){
                 if(e.scrollLeft>=toLeft||e.offsetWidth+e.scrollLeft>=e.scrollWidth){
                   clearInterval(myTimer);
                   myTimer=0;
                   return;
                 }
                 document.getElementById("gallery-list").scrollLeft+=4;
               }else{
                 if(document.getElementById("gallery-list").scrollLeft<=toLeft||e.scrollLeft<=0){
                   clearInterval(myTimer);
                   myTimer=0;
                   return;
                 }
                 document.getElementById("gallery-list").scrollLeft-=4;
               }
             }
          }
          /*function showBigImage(src)
          {
             var img    = document.getElementById("goods_img");
             var parent = img.parentNode;
             parent.removeChild(img);
             var img    = document.createElement("img");
             img.src    = src;
             img.id     = "goods_img";
             //img.height = 300;
             //img.width  = 300;
             parent.appendChild(img);
          }*/
		  
		  
		  
		  
  function changePrice()
{
  var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
  var qty = document.forms['ECS_FORMBUY'].elements['number'].value;

  Ajax.call('goods.php', 'act=price&id=' + goodsId + '&attr=' + attr + '&number=' + qty, changePriceResponse, 'GET', 'JSON');
}
function changePriceResponse(res)
{
  if (res.err_msg.length > 0)
  {
    alert(res.err_msg);
  }
  else
  {
    // document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;

    if (document.getElementById('ECS_GOODS_AMOUNT'))
      document.getElementById('ECS_GOODS_AMOUNT').innerHTML = res.result;
  }
}  


function showBigImage(num) {
//var s = obj.getElementsByTagName('img')[0].src.split('/');
//var i = 'images/' + s[s.length - 3] + '/goods_img/' + s[s.length - 1];
// var i = obj.getElementsByTagName('span')[0].innerHTML;
// var o = document.getElementById('bigImage');

// lis = obj.parentElement.parentElement.getElementsByTagName('li');
// for(ii=0 ;ii<lis.length ;ii++){
	// lis[ii].style.borderColor = "#ccc";
// }
// obj.parentElement.style.borderColor = "red";
// if (o.tagName.toLowerCase() == 'a') {
// o.href = i;
// o.getElementsByTagName('img')[0].src = i;
// } else {
// o.src = i;
// }
	var imgs = document.getElementById('item_good_imgs').getElementsByTagName('a');
	
	for (var i = 0; i<imgs.length; i++){
		imgs[i].style.display = 'none';
	}
	imgs[num].style.display = 'block';
	var lis = document.getElementById('item-gallerys').getElementsByTagName('li');
	for (var i = 0; i<lis.length; i++){
		lis[i].style.borderColor = '#ccc';
		lis[i].className = '';
	}
	lis[num].className = 'gallerys_curs';
	lis[num].style.borderColor = '#000';
	// var sleft = document.getElementById('ISL_Cont_1').scrollTop;
	// if(Math.floor(sleft/91)+4 <= num){
		// gallery_sc(document.getElementById('item-img-turnR'),1);
	// }
	// if(Math.floor(sleft/91) >= num){
		// gallery_sc(document.getElementById('item-img-turnR'),-1);
	// }
}


function toggle_login_box(obj,e){
	var sfm = document.getElementById('Size');
	if(sfm.style.display == 'none'){
		sfm.style.display = 'block';
	} else {
		sfm.style.display = 'none';
	};
	cancel_event(e);
	document.body.parentNode.className += ' overlay_open';
	//document.body.parentNode.getElementsByTagName('html')[0].className = 'overlay_open';
}

function cancel_event(e){
	if (e && e.stopPropagation){
		e.stopPropagation();
	} else {
		window.event.cancelBubble=true;
	}
}
/* document.body.onclick = function(){
	document.getElementById('Size').style.display = 'none';
} */

  
function gallery_sc(ele,n){
	if(ele.className.indexOf('disabled') != -1){
		return false;
	}
	if(n == -1){
		document.getElementById('item-img-turnR').className = document.getElementById('item-img-turnR').className.replace(' updown-disabled','');
	} else {
		document.getElementById('item-img-turnL').className = document.getElementById('item-img-turnL').className.replace(' updown-disabled','');
	}
	document.getElementById('SCL_Cont_1').scrollTop += 115 * n;
	
	if(document.getElementById('SCL_Cont_1').scrollTop <= 0){
		document.getElementById('item-img-turnL').className += ' updown-disabled';
	}
	if(document.getElementById('SCL_Cont_1').scrollTop + document.getElementById('SCL_Cont_1').clientHeight >= document.getElementById('List1_G').clientHeight){
		document.getElementById('item-img-turnR').className += ' updown-disabled';
	}
}
if(document.getElementById('SCL_Cont_1')){
	if(document.getElementById('SCL_Cont_1').getElementsByTagName('li').length <5){
		//document.getElementById('item-img-turnL').className += ' updown-disabled';
		document.getElementById('item-img-turnR').className += ' updown-disabled';
	}
}
window.footer_promotion_countdown = setInterval(function(){
	var ctime = Date.now();
	var countdown_elems = Sizzle('.time-left');
	for(var i = 0; i < countdown_elems.length; i++){
		var count_to = parseInt(Sizzle('.count_down',countdown_elems[i])[0].innerHTML);
		var count_down = parseInt((count_to - ctime)/1000);
		var day = Math.floor(count_down/86400);
		count_down -= day*86400;
		var hour = Math.floor(count_down/3600);
		if(hour < 10){
			hour = '0' + hour;
		}
		count_down -= hour*3600;
		var min = Math.floor(count_down/60);
		if(min < 10){
			min = '0' + min;
		}
		count_down -= min*60;
		var sec = Math.floor(count_down);
		if(sec < 10){
			sec = '0' + sec;
		}
		Sizzle('.weekly_seconds',countdown_elems[i])[0].innerHTML = sec;
		Sizzle('.weekly_minutes',countdown_elems[i])[0].innerHTML = min;
		Sizzle('.weekly_hours',countdown_elems[i])[0].innerHTML = hour;
		if(Sizzle('.weekly_days',countdown_elems[i]).length>0){
			Sizzle('.weekly_days',countdown_elems[i])[0].innerHTML = day;
		}
	}
},1000);
var selected_color = '';
	var selected_size = '';
	function select_color(obj , key , attr_value,id){
		var t =0;
		if(obj.className.indexOf('selected') != -1){
            return ;
        }
		if(obj.className.indexOf('has-no') != -1){
			document.getElementById('colour_atpError').innerHTML = '<em></em><p><span>'+attr_value+' </span>is unavailable in <span>'+ selected_size +' </span>. Please select a different color. <i></i></p>';
			document.getElementById('colour_atpError').style.display = 'block';
			if(document.getElementById('colour_atpError').offsetWidth > 0){
				document.getElementById('colour_atpError').style.left = -(document.getElementById('colour_atpError').offsetWidth + 10) + 'px';	
			}
			var t = setTimeout("clear_html(document.getElementById('colour_atpError'))" , 2000);
			return ;
		}else{
			clearTimeout(t);
			selected_color = attr_value;
			document.getElementById('colour_atpError').style.display = 'none';	
		}
		var colour_list = document.getElementById('colour_list');	
		var colour_label = colour_list.getElementsByTagName('div');
		for(var i = 0 ;  i < colour_label.length ; i++){
			colour_label[i].className = colour_label[i].className.replace(' selected','');
		}
		if(obj.className.indexOf('has-no') == -1){
			obj.className += ' selected';
			document.getElementById('spec_colour').value = id;
		}
		var span = obj.getElementsByTagName('span');
		var size_array= new Array();
		for(var j = 0 ;  j < span.length ; j++){
			if(span[j].className == 'color_size'){
				var size_str = span[j].innerHTML;	
				size_array = size_str.split(",");
			}	
		}/* 
		var size_list = document.getElementById('size_list');
		var size_label = size_list.getElementsByTagName('div');
		for(var i = 0 ;  i < size_label.length ; i++){
			if(size_label[i].className == 'atpError'){
				continue;
			}
			size_label[i].parentNode.className = '';
			
			var size_span = size_label[i].getElementsByTagName('span');
			var has_size = 0;
			for(var j = 0 ;  j < size_span.length ; j++){
				if(size_span[j].className == 'size'){
					var this_size = size_span[j].innerHTML;
					for(var m = 0 ;  m < size_array.length ; m++){
						if(size_array[m] == this_size){
							has_size = 1;
							break;	
						}	
					}
					if(has_size == 0){
						size_label[i].parentNode.className = 'this_no';
						if(size_label[i].className.indexOf('has-no') == -1){
							size_label[i].className += ' has-no';	
						}
					} else {
						size_label[i].parentNode.className = '';
						if(size_label[i].className.indexOf('has-no') > -1){
							size_label[i].className = size_label[i].className.replace(' has-no','');	
						}
					}
					break;
				}
			}
		} */
        var options = Sizzle('#spec_size option');
        for(var i = 0; i < options.length; i++){
            options[i].disabled = true;
            for(var j = 0; j < size_array.length; j++){
                if(size_array[j] == options[i].getAttribute('data-value')){
                    options[i].disabled = false;
                }
            }
        }
		document.getElementById('select_color_value').innerHTML = attr_value;
		if(key == 'nopicture'){
			document.getElementById('detailsImg-error').innerHTML = '<em></em><p>photo not available in <span>'+ attr_value +'</span></p>';
			document.getElementById('detailsImg-error').style.display = 'block';
			var t = setTimeout("clear_html(document.getElementById('detailsImg-error'))" , 2000);	
		}else{
			showBigImage(key);
		}
	}
	
	function select_size(obj , attr_value,id){
		var t =0;
		if(obj.className.indexOf('has-no') != -1){
			document.getElementById('size_atpError').innerHTML = '<em></em><p><span>'+ attr_value +' </span>is unavailable in <span>'+ selected_color +' </span>. Please select a different size. <i></i></p>';			
			document.getElementById('size_atpError').style.display = 'block';
			if(document.getElementById('size_atpError').offsetWidth > 0){
				document.getElementById('size_atpError').style.left = -(document.getElementById('size_atpError').offsetWidth + 10) + 'px';	
			}
			t = setTimeout("clear_html(document.getElementById('size_atpError'))" , 2000);
			return;
		}else{
			clearTimeout(t);
			selected_size = attr_value;
			document.getElementById('size_atpError').style.display = 'none';	
		}
		var size_list = document.getElementById('size_list');
		var size_label = size_list.getElementsByTagName('div');
		for(var i = 0 ;  i < size_label.length ; i++){
			
			size_label[i].className = size_label[i].className.replace(' selected','');
		}
		if(obj.className.indexOf('has-no') == -1){
			obj.className += ' selected';
			
			document.getElementById('spec_size').value = id;
		}
		document.getElementById('selected_size').innerHTML = attr_value;
		var colour_list = document.getElementById('colour_list');	
		var colour_label = colour_list.getElementsByTagName('div');
		for(var i = 0 ;  i < colour_label.length ; i++){
			if(colour_label[i].className == 'atpError'){
				continue;
			}
			
			var span = colour_label[i].getElementsByTagName('span');
			for(var j = 0 ;  j < span.length ; j++){
				if(span[j].className == 'color_size'){
					var size_str = span[j].innerHTML;	
					var size_array= new Array();
					size_array = size_str.split(",");
					var has_size = 0;
					for(var m = 0 ;  m < size_array.length ; m++){
						if(size_array[m] == attr_value){
							has_size = 1;
							break;	
						}
					}
					if(has_size == 0){
						if(colour_label[i].className.indexOf('has-no') == -1){
							colour_label[i].className += ' has-no';
						}
					} else {
						colour_label[i].className = colour_label[i].className.replace(' has-no','');
					}
					break;
				}	
			}
		}
	}
    
    function change_size(elem){
        var size = Sizzle('option:selected',elem)[0].getAttribute('data-value');
        // console.log(size);
        var color_labels = Sizzle('#colour_list div.label');
        for(var i = 0; i < color_labels.length; i++){
            var size_list = Sizzle('.color_size',color_labels[i])[0].innerHTML.split(',');
            var has_size = 0;
            for(var j = 0; j < size_list.length; j++){
                if(size_list[j] == size){
                    has_size = 1;
                }
                if(has_size){
                    removeClass(color_labels[i],'has-no');
                } else {
                    removeClass(color_labels[i],'has-no');
                }
            }
        }
        document.getElementById('selected_size').innerHTML = size;
    }

	
	function clear_html(obj){
		obj.innerHTML = '';	
		obj.style.display = 'none';
	}
	
	
	function check_colour(obj , value , colour){
		if(selected_size){
			var size_array= new Array();
			size_array = value.split(",");
			var has_size = 0;
			for(var m = 0 ;  m < size_array.length ; m++){
				if(size_array[m] == selected_size){
					has_size = 1;
					break;	
				}
			}
			if(!has_size){
				var error_span = obj.parentNode.getElementsByTagName('span');
				for(var j = 0 ;  j < error_span.length ; j++){
					if(error_span[j].className.indexOf('colour_attrtip') != -1){
						error_span[j].innerHTML = '<i>'+colour+' </i><span>Unavailable in <span>'+ selected_size +'</span></span>';
						break;
					}
				}
			}
		}
	}
	
	
	function check_size(obj , value){
		if(selected_color){
			if(obj.className.indexOf('has-no') != -1){
				var error_span = obj.parentNode.getElementsByTagName('span');
				for(var j = 0 ;  j < error_span.length ; j++){
					if(error_span[j].className.indexOf('attrtip hidden-xs') != -1){
						error_span[j].innerHTML = '<i>'+value+' </i><span>Unavailable in <span>'+ selected_color +'</span></span>';
						break;
					}
				}
			}
		}
	}
	
	function clear_error_colour(obj , value){
		var error_span = obj.parentNode.getElementsByTagName('span');
		for(var j = 0 ;  j < error_span.length ; j++){
			if(error_span[j].className.indexOf('colour_attrtip') != -1){
				error_span[j].innerHTML = '<i>'+value+'</i>';
				break;
			}
		}
	}
	
	function clear_error_size(obj , value){
		var error_span = obj.parentNode.getElementsByTagName('span');
		for(var j = 0 ;  j < error_span.length ; j++){
			if(error_span[j].className.indexOf('attrtip hidden-xs') != -1){
				error_span[j].innerHTML = '<i>'+value+'</i>';
				break;
			}
		}
	}
    
    function qty_add(elem){
        if(elem){
            var parent = elem.parentNode.parentNode;
            var qty_input = parent.getElementsByTagName('input')[0];
            var qty = parseInt(qty_input.value);
            if(qty < 1){
                qty = 1;
            }
            if(Sizzle('.mins',parent)[0].className.indexOf('dis_no') != -1){
                Sizzle('.mins',parent)[0].className = Sizzle('.mins',parent)[0].className.replace('dis_no','');
            }
            qty_input.value = qty + 1;
        }
        return false;
    }
    function qty_minus(elem){
        if(elem){
            var parent = elem.parentNode.parentNode;
            var qty_input = parent.getElementsByTagName('input')[0];
            var qty = qty_input.value;
            qty = qty - 1;
            if(qty < 1){
                qty = 1;
            }
            qty_input.value = qty;
            if(qty <= 1){
                if(Sizzle('.mins.qty_change',parent)[0].className.indexOf('dis_no') == -1){
                    Sizzle('.mins.qty_change',parent)[0].className += ' dis_no';
                }
            }
        }
        return false;
    }
    
    function select_releated_color(elem){
        var goods_img = Sizzle('.color_img',elem)[0].innerHTML;
        var labels = Sizzle('>span',elem.parentNode)
        var id = Sizzle('.color_id',elem)[0].innerHTML;
        var p = elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var value = Sizzle('i',elem)[0].innerHTML;
        var sizes = Sizzle('.color_size',elem)[0].innerHTML;
        
        if(Sizzle('.label',elem)[0].className.indexOf('has-no') > -1){
            return false;
        }
        
        Sizzle('.releated_select_color_value',elem.parentNode.parentNode)[0].innerHTML = value;
        check_size(sizes,Sizzle('.list-attr-size .attr-list>span',elem));
        if(goods_img){
            Sizzle('.item-img img',p)[0].src = goods_img;
        }
        
        for(var i = 0; i < labels.length; i++){
            removeClass(Sizzle('.label',labels[i])[0],'selected');
        }
        addClass(Sizzle('.label',elem)[0],'selected');
        Sizzle('input.spec_colour',elem.parentNode)[0].value = id;
        // console.log();
        return false;
    }
    
    function select_releated_size(elem){
        // var labels = Sizzle('>span',elem.parentNode)
        //var id = Sizzle('.size_id',elem)[0].innerHTML;
        var value = elem.value;
        
        // if(Sizzle('.label',elem)[0].className.indexOf('has-no') > -1){
            // return false;
        // }
        check_color(value,Sizzle('.list-attr-color .attr-list>span',elem));
        
        Sizzle('.releated_select_size',elem.parentNode.parentNode)[0].innerHTML = Sizzle('option:selected',elem)[0].getAttribute('data-value');
        // for(var i = 0; i < labels.length; i++){
            // removeClass(Sizzle('.label',labels[i])[0],'selected');
        // }
        // addClass(Sizzle('.label',elem)[0],'selected');
        //Sizzle('input.spec_size',elem.parentNode)[0].value = id;
        // return false;
    }
    
    function check_color(size_value,labels){
        for(var i = 0; i < labels.length; i++){
            var color_size = Sizzle('.color_size',labels[i])[0].innerHTML.split(',');
            var has_no = true;
            for(var i = 0; i < color_size.length; i++){
                if(size_value == color_size[i]){
                    has_no = false;
                    break;
                }
            }
            if(has_no){
                addClass(Sizzle('.label',labels[i])[0],'has-no');
            } else {
                removeClass(Sizzle('.label',labels[i])[0],'has-no');
            }
        }
    }
    
    function check_size(size_value,labels){
        var color_size = size_value.split(',');
        for(var i = 0; i < labels.length; i++){
            var _size_value = Sizzle('.size',labels[i])[0].innerHTML;
            var has_no = true;
            for(var i = 0; i < color_size.length; i++){
                if(_size_value == color_size[i]){
                    has_no = false;
                    break;
                }
            }
            if(has_no){
                addClass(Sizzle('.label',labels[i])[0],'has-no');
            } else {
                removeClass(Sizzle('.label',labels[i])[0],'has-no');
            }
        }
    }
	
	function show_desc(elem){
		var desc_divs = Sizzle('.products_goods_info_con');
		var is_show = Sizzle('.products_goods_info_con',elem.parentNode)[0].style.display == 'block';
		for(var i = 0; i < desc_divs.length; i++){
			desc_divs[i].style.display = 'none';
		}
		var desc_ems = Sizzle('.goods_infotit_hide');
		for(var i = 0; i < desc_ems.length; i++){
			desc_ems[i].className = 'goods_infotit_show';
		}
		var elem_div = Sizzle('.products_goods_info_con',elem.parentNode)[0];
		// if(elem_div.style.display == 'none')
		if(is_show){
			return;
		}
		Sizzle('.goods_infotit_show',elem)[0].className = 'goods_infotit_hide';
		Sizzle('.products_goods_info_con',elem.parentNode)[0].style.display = 'block';
	}