if(faqlist = document.getElementById('faq_list')){
	var lis = faqlist.getElementsByTagName('li');
	for(var i = 0 ;i<lis.length ; i++ ){
		lis[i].getElementsByTagName('p')[0].onclick = function(){
			var div_a = this.parentNode.getElementsByTagName('div')[0];
			if(div_a.style.display == '' || div_a.style.display == 'none'){
				div_a.style.display = 'block';
				this.parentNode.getElementsByTagName('em')[0].className = 'faq_hide';
			} else {
				div_a.style.display = 'none';
				this.parentNode.getElementsByTagName('em')[0].className = 'faq_show';
			}
		};
	}
}    
