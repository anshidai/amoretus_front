//<![CDATA[



function submitComment(frm)
{
  var cmt = new Object;
  var error = false;

  cmt.username        = frm.elements['username'].value;
  //cmt.email           = frm.elements['email'].value;
  cmt.content         = frm.elements['content'].value;
  cmt.title           = frm.elements['title'].value;
  cmt.type            = frm.elements['cmt_type'].value;
  cmt.id              = frm.elements['id'].value;
  cmt.enabled_captcha = frm.elements['enabled_captcha'] ? frm.elements['enabled_captcha'].value : '0';
  cmt.captcha         = frm.elements['captcha'] ? frm.elements['captcha'].value : '';
  cmt.rank            = frm.elements['comment_rank'].value;
  cmt.fit             = 0;

  //document.getElementById('username_msg').innerHTML = '';
  try{
	  document.getElementById('email_msg').innerHTML = '';  
  }catch(e){  
  }
  document.getElementById('content_msg').innerHTML = '';


  for (i = 0; i < frm.elements['rating_Fit'].length; i++)
  {
    if (frm.elements['rating_Fit'][i].checked)
    {
       cmt.fit = frm.elements['rating_Fit'][i].value;
     }
  }

 if (cmt.username.length == 0)
  {
	 document.getElementById('username_msg').innerHTML = '(Please input Name)';
     error = true;
 }
/*
  if (cmt.email.length > 0)
  {
     if (!(Utils.isEmail(cmt.email)))
     {
		  try{
			  document.getElementById('email_msg').innerHTML = '(Invalid Email Address!)';
		  }catch(e){  
		  }       
     	error = true;
      }
   }
   else
   {    
	  try{
		  document.getElementById('email_msg').innerHTML = '(Please input Email Address)';
	  }catch(e){  
	  }
     	error = true;
   }
*/
   if (cmt.content.length == 0)
   {
      document.getElementById('content_msg').innerHTML = '(Please input Content)';
      error = true;
   }

   if (cmt.enabled_captcha > 0 && cmt.captcha.length == 0 )
   {
      alert(captcha_not_null);
      error = true;
   }
   if(error){
	    return false;  
   }

   Ajax.call(window.site_path+'comment.php', 'cmt=' + cmt.toJSONString(), commentResponse, 'POST', 'JSON');
   return false;
}


  function commentResponse(result)
  {
    if (result.error == 0)
    {
      var layer = document.getElementById('ECS_COMMENT');

      if (layer)
      {
        layer.innerHTML = result.content;
		document.getElementById('commentForm').style.display = 'block';
		document.getElementById('form-comment-notice').innerHTML = '<img src="'+window.site_path+'themes/amoretu/images/create-success.png" width="20" height="20" /><span>Review Successfully! Thanks!</span><br class="clear" />';
      }
    }
	
	return false;
  }
  
function hover_star(idx){
    var divs = Sizzle('.star_group_rating');
    for(var i = 0; i < divs.length; i++){
        removeClass(divs[i],'star_on');
    }
    for(var i = 0;i<idx&&i<divs.length; i++){
        addClass(divs[i],'star_hover');
    }
}
function blur_star(){
    var divs = Sizzle('.star_group_rating');
    for(var i = 0; i < divs.length; i++){
        removeClass(divs[i],'star_hover');
    }
    idx = document.getElementById('comment_rank').value;
    for(var i = 0;i<idx&&i<divs.length; i++){
        addClass(divs[i],'star_on');
    }
}
function click_star(idx){
    var divs = Sizzle('.star_group_rating');
    for(var i = 0;i<idx&&i<divs.length; i++){
        addClass(divs[i],'star_on');
    }
    document.getElementById('comment_rank').value = idx;
    return false;
}
function select_fit(elem){
    var labels = Sizzle('.BVFieldRadioLabelFit');
    for(var i = 0; i < labels.length; i++){
        removeClass(labels[i],'BVSelected');
    }
    addClass(elem,'BVSelected');
}
//]]>