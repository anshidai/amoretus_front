function show_img(obj){
	var fr = document.getElementById('gallery_frame');
	window.gallery_frame_ready = true;
	if(!fr){
		fr = document.createElement('iframe');
		fr.name = 'gallery';
		fr.id = 'gallery_frame';
		fr.style.display = 'none';
		document.body.appendChild(fr);
		window.gallery_frame_ready = false;
	}
    fr.src = window.site_path + 'gallery.html?'+Math.random();
	fr.style.position = 'fixed';
	fr.style.top = 0;
	fr.style.left = 0;
	fr.style.border = 0;
	fr.style.width = '100%';
	fr.style.height = document.documentElement.clientHeight + 'px';
	fr.style.zIndex = 9999;
	
	window.onresize = function(){
		var fr = document.getElementById('gallery_frame');
		if(fr){
			fr.style.position = 'fixed';
			fr.style.top = 0;
			fr.style.left = 0;
			fr.style.width = '100%';
			fr.style.height = document.documentElement.clientHeight + 'px';
		}
	}
	
	var gallerys = Sizzle('.lightbox img');
	window._gallerys = new Array();
	for(var i = 0;i < gallerys.length; i++){
		window._gallerys.push(gallerys[i].src);
	}
	window._idx = array_index_of(obj.src,window._gallerys);
	fr.onload = function(){
		var f = window.frames['gallery'];
		f.window.gallerys = window._gallerys;
		show_gallery(window._idx);
		window.gallery_frame_ready = true;
	};
	if(window.gallery_frame_ready){
		show_gallery(window._idx);
	}
	fr.style.display = 'block';
	document.body.className += ' frame_open';
	document.body.style.overflow = 'hidden';
}

function array_index_of(str,arr){
	for(var i = 0;i < arr.length ;i++){
		if(arr[i] == str){
			return i;
		}
	}
	return -1;
}
function show_gallery(idx){
	var f = window.frames['gallery'];
	console.log(f)
	return
	f.document.getElementById('gallery_image').src = f.window.gallerys[idx];
	f.window.idx = idx;
}