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

//  method for font change on select
function changeFont(font){
  document.documentElement.style.setProperty('--font-family', font.value);
}

// method for key hover bg-color change
function keyColorCalculation(){
  
    var current_color = getComputedStyle(document.documentElement).getPropertyValue('--key-color');
    var match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color);
    // Set key light color saturation
    var keyLightSaturation = (16 / 100);
    var keyLightColor = "rgba(" + [match[1],match[2],match[3],keyLightSaturation].join(',') +")";
    // Set key focus saturation
    var keyFocusSaturation = (64 / 100);
    var keyFocusColor = "rgba(" + [match[1],match[2],match[3],keyFocusSaturation].join(',') +")";
    // Set key hover saturation
    var keyHoverSaturation = (80 / 100);
    var keyHoverColor = "rgba(" + [match[1],match[2],match[3],keyHoverSaturation].join(',') +")";
    
    console.log(keyLightColor+"|"+keyFocusColor+"|"+keyHoverColor);
    // Set key light color rgba
    document.documentElement.style.setProperty('--key-light', keyLightColor);
    // Set key focus color rgba
    document.documentElement.style.setProperty('--key-focus', keyFocusColor);
    // Set key hover color rgba
    document.documentElement.style.setProperty('--key-hover', keyHoverColor);
    
}

keyColorCalculation();


// method for hero bg-color change
function heroColorCalculation(){
  
  var current_color = getComputedStyle(document.documentElement).getPropertyValue('--hero-color');
  var match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color);
  // Set key light color saturation
  var heroLightSaturation = (32 / 100);
  var heroLightColor = "rgba(" + [match[1],match[2],match[3],heroLightSaturation].join(',') +")";
  console.log(heroLightColor);
  // Set hero light color rgba
  document.documentElement.style.setProperty('--hero-light', heroLightColor);
}

heroColorCalculation();
