$(function(){
	$('.btn-delete').click(function(){
		if($(this).hasClass('confirm')) {
            if(!confirm('Confirm the operation?')) {
                return false;
            }
        }
		
		if((target = $(this).attr('href')) || (target = $(this).attr('url'))) {
            $.get(target).success(function(data) {
				if(data.status == 0) {
					$('#notice_show').addClass('error').html(data.info).show(300).delay(2000).hide(300);
				}
				else if(data.status == 1) {
					$('#notice_show').removeClass('error').html(data.info).show(300).delay(2000).hide(300);
					setTimeout(function(){
						location.href = "/?s=address/index";
					}, 2000);
				}
            });
        }
        return false;
	});
	
	
});


function addres_submit(form)
{
	var _form = $('#'+form);
	
	$.post('/?s=address/edit', _form.serialize(), function(data){
		if(data.status == 0) {
			$('#notice_show').addClass('error').html(data.info).show(300).delay(2000).hide(300);
		}
		else if(data.status == 1) {
			$('#notice_show').removeClass('error').html(data.info).show(300).delay(2000).hide(300);
			setTimeout(function(){
				location.href = "/?s=address/index";
			}, 2000);
		}
	});

}

function edit_user_addresss(address_id)
{
	var divs = Sizzle('.Account-shippingInfo');
	var forms = Sizzle('.form-checkConsignee-user');
	for(var i = 0; i < divs.length; i++){
		divs[i].style.display = 'none';
	}
	for(var i = 0; i < forms.length; i++){
		forms[i].style.display = 'none';
	}
	document.getElementById('add_address_btn').style.display = 'none';
	document.getElementById('form-checkConsignee-user_'+address_id).style.display = 'block';
	return false;
}

function cancel_edit_address(address_id)
{
	/*if(address_id){
	document.getElementById('Account-shippingInfo_'+address_id).style.display = 'block';
	document.getElementById('form-checkConsignee-user_'+address_id).style.display = 'none';
	} else {
	document.getElementById('add_address_btn').style.display = 'block';
	document.getElementById('form-checkConsignee-user_').style.display = 'none';
	}*/
	var divs = Sizzle('.Account-shippingInfo');
	var forms = Sizzle('.form-checkConsignee-user');
	for(var i = 0; i< forms.length; i++){
		forms[i].style.display = 'none';
	}
	for(var i = 0; i < divs.length; i++){
		divs[i].style.display = 'block';
	}
	document.getElementById('add_address_btn').style.display = 'block';
	return false;
}