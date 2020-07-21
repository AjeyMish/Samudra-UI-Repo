// Sai JavaScript Document

$(document).on("scroll",function(){
  if ($(document).scrollTop() > 100){
    $(".brander").slideUp(160);
  }else {
    $(".brander").slideDown(160);
  }
});

$(document).ready(function(){

$("#hamburger").click(function(){
 $(".drawer").show(1000);
});
	
$("#closemenu").click(function(){
$(".drawer").hide(1000);
});	
	
	

	
});


function changeFont(font){
  // document.body.style.fontFamily = font.value;
  document.documentElement.style.setProperty('--font-family', font.value);
}

