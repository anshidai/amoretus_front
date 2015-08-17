

function goodslistResponse(result){
	result = eval(result);
	var goods_list = result.goods_list;

	var temp = document.getElementById('list-item').innerHTML;
	document.getElementById('list-item').insertAdjacentHTML('beforeend', result.goods_list);
	document.getElementById('fromto').innerHTML = result.fromto;
	document.getElementById('cat_id').value = result.cat_id;
	document.getElementById('page').value = result.page;
	// document.getElementById('loading').style.display = 'none';
	if(result.goods_list.length > 100){
		document.getElementById('litb-icon-back-to-top').style.bottom = '49px';
	}
	if(result.is_end){
		document.getElementById('g-show-more').style.display = 'none';	
	}
	window.is_send_request = false;
}

function loadmore(){
	if(!window.is_send_request){
		window.is_send_request = true;
		var cat_id = document.getElementById('cat_id').value;
		var page = parseInt(document.getElementById('page').value) + 1;
		var shopby = document.getElementById('shopby').value;
		var sortby = document.getElementById('sortby').value;
        var str =  "id=" + cat_id + "&page=" + page;
        var filter = get_filter_str();
        if(filter){
            str += '&'+filter;
        }
        if(!window.load_url){
            window.load_url = 'category.php';
        }
        var url = window.site_path+window.load_url+"?is_ajax=1";
        if(shopby){
            url += '&shop='+shopby;
        }
        if(sortby){
            url += '&sort='+sortby;
        }
		Ajax.call(url ,str, goodslistResponse, "POST", "JSON");
	}
	return false;
}
