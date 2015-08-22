function toggle_cart(elem){
	var checkout_cart_info = document.getElementById('checkout_cart_info');
	checkout_cart_info.style.display = checkout_cart_info.style.display == 'none' ? 'block':'none';
	if(hasClass(elem,'c_show')){
		removeClass(elem,'c_show');
	} else {
		addClass(elem,'c_show');
	}
}