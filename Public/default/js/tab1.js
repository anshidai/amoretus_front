var ul = document.getElementById ('tab_title');
var li = ul.getElementsByTagName ('li');
for ( var i = 0; i < li.length; i++ ){
	if(li[i].getAttribute("data-from_id")){//如果有from_id属性
		li[i].onclick = function (){
			for ( var k = 0; k < li.length; k++ ){
				document.getElementById( li[k].getAttribute("data-from_id") ).style.display = 'none';//隐藏所有内容
				li[k].className = '';																														//去除当前选中标签样式
			}
			document.getElementById(this.getAttribute("data-from_id")).style.display = 'block';
			this.className = 'curs_title';
		}		
	}
}
