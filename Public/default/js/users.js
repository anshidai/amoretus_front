$(function(){
	$('.ajax-get').click(function() {
        var target;
        var that = this;
        if($(this).hasClass('confirm')) {
            if(!confirm('Confirm the operation?')) {
                return false;
            }
        }
		
		if((target = $(this).attr('href')) || (target = $(this).attr('url'))) {
            $.get(target).success(function(data) {
				alert(data.info);
				 if (data.url) {
					location.href = data.url;
				 }
            });
        }
        return false;
	});
	
	
});

function toggle_cart(elem){
	var checkout_cart_info = document.getElementById('checkout_cart_info');
	checkout_cart_info.style.display = checkout_cart_info.style.display == 'none' ? 'block':'none';
	if(hasClass(elem,'c_show')){
		removeClass(elem,'c_show');
	} else {
		addClass(elem,'c_show');
	}
}