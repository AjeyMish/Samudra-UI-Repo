// Sai JavaScript Document
var transitionValue = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');
var transitionEndValue = getComputedStyle(document.documentElement).getPropertyValue('--transition-end-duration');

$(document).on("scroll",function(){
  if ($(document).scrollTop() > 100){
    $(".brander").slideUp(160);
  }else {
    $(".brander").slideDown(160);
  }
});

//  method for font change on select
function changeFont(font){
  document.documentElement.style.setProperty('--font-family', font.value);
  $("#font-change-body").html('Font updated: Value: '+font.value);
  // If want to set delay to all bootstrap toasts: bootstrap.Toast.Default.delay = 400000;
  $('.font-change-toast').toast('show');
}

// method for key hover bg-color change
function keyColorCalculation(){
  
  var current_color = getComputedStyle(document.documentElement).getPropertyValue('--key-color');
  // Regex that return percentage value of Hue, Saturation and light: 
  // var regexp = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
  var regexp = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g;
  var match = regexp.exec(current_color).slice(1);
  var hue = match[0];
  var saturation= match[1];
  var light = match[2];
  var saturationPercentage = saturation+"%";
  var lightPercentage = light+"%";
  var lightAlpha = 0.24;
  var focusedAlpha = 0.64;
  var hoverAlpha = 0.80;
  
  var darkSaturationForHover = "80%";
  var darkLightForHover = "32%";

  var lightSaturationKey = "64%";
  var lightLightForKey = "80%";

  var lightSaturationForFocus = "64%";
  var lightLightForFocus = "40%";

  console.log("Hue: " + hue + "\nSaturation: " + saturationPercentage + "\nValue: " + lightPercentage);
  // Set key light color saturation
  var keyLightColor = "hsla(" + [hue,saturationPercentage,lightPercentage, lightAlpha].join(',') +")";
  // Set key focus saturation
  var keyFocusColor = "hsla(" + [hue,lightSaturationForFocus,lightLightForFocus, focusedAlpha].join(',') +")";
  // Set key hover saturation
  var keyHoverColor = "hsla(" + [hue,darkSaturationForHover,darkLightForHover, hoverAlpha].join(',') +")";
  
  console.log(keyLightColor+"|"+keyFocusColor+"|"+keyHoverColor);
  // Set key light color rgba
  document.documentElement.style.setProperty('--key-light', keyLightColor);
  // Set key focus color rgba
  document.documentElement.style.setProperty('--key-focus', keyFocusColor);
  // Set key hover color rgba
  document.documentElement.style.setProperty('--key-hover', keyHoverColor);
  
}

keyColorCalculation();


function heroColorCalculation(){
  var current_color = getComputedStyle(document.documentElement).getPropertyValue('--hero-color');
  var regexp = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g;
  var match = regexp.exec(current_color).slice(1);
  var hue = match[0];
  var saturation= match[1];
  var light = match[2];
  var saturationPercentage = saturation+"%";
  var lightPercentage = light+"%";
  var lightAlpha = 0.24;
  
  console.log("Hue: " + hue + "\nSaturation: " + saturationPercentage + "\nValue: " + lightPercentage);
  // Set key light color saturation
  var heroLightColor = "hsla(" + [hue,saturationPercentage,lightPercentage, lightAlpha].join(',') +")";
  console.log(heroLightColor);
  // Set key light hero
  document.documentElement.style.setProperty('--hero-light', heroLightColor);
  
}

heroColorCalculation();

function openNav() {
  $('#mySidepanel').width('100%');
  $("#mySidepanel").css("transition", transitionValue);
}

function closeNav() {
  $('#mySidepanel').width('0');
  $("#mySidepanel").css("transition", transitionEndValue);
}


//  method for icon select update
function selectCategoryIcon(iconName){
  $("#slectedCategoryIcon").removeClass();
  var iconStyleContent = {
    iconbiryani:'e91c',
    icondosa:'e91d',
    iconbread:'e91e',
    iconbeverages:'e91f',
    iconclock:'e909',
    icondesserts:'e921',
    iconlunch:'e920',
    iconuser:'e91b'
  };
  var iconCategoryName = {
    iconbiryani:'Biryani',
    icondosa:'Dosa',
    iconbread:'Bread',
    iconbeverages:'Beverages',
    iconclock:'Clock',
    icondesserts:'Desserts',
    iconlunch:'Lunch',
    iconuser:'User'
  }
  var categoryNameValue = iconCategoryName[iconName];
  var selectedIconClass = "icomoonfont "+iconName;
  $("#slectedCategoryIcon").addClass(selectedIconClass);
  $("#slectedCategoryName").html(categoryNameValue);
  $('.icon-change-toast').toast('show');
  $("#icon-change-body").html('Icon updated: '+categoryNameValue);
}


//  method for icon 2 select update
function selectCategoryIcon2(iconContent){
  // $("#slectedCategoryIcon2").removeClass();
  var iconStyleContent = {
    iconbiryani:'e91c',
    icondosa:'e91d',
    iconbread:'e91e',
    iconbeverages:'e91f',
    iconclock:'e909',
    icondesserts:'e921',
    iconlunch:'e920',
    iconuser:'e91b'
  };
  var iconCategoryName = {
    iconbiryani:'Biryani',
    icondosa:'Dosa',
    iconbread:'Bread',
    iconbeverages:'Beverages',
    iconclock:'Clock',
    icondesserts:'Desserts',
    iconlunch:'Lunch',
    iconuser:'User'
  }
  var categoryNameValue = iconCategoryName[iconContent];
  var categoryIconContent = iconStyleContent[iconContent];
  // var selectedIconClass = "icomoonfont "+iconContent;
  // $("#slectedCategoryIcon").addClass(selectedIconClass);
  var resultedIconContent = '"\\'+categoryIconContent+'"';
  document.documentElement.style.setProperty('--category-two-icon-content', resultedIconContent);
  $("#slectedCategoryName2").html(categoryNameValue);
}

function focusField(){
  console.log('one');
  $(".form-loaction-drop-icon").removeClass('iconchevron-down');
  $(".form-loaction-drop-icon").addClass('iconchevron-up');
  $("#trendingLocations-wrapper").addClass('display-suggestion-wrapper');
}
function blurField(){
  $("#trendingLocations-wrapper").removeClass('display-suggestion-wrapper');
  $(".form-loaction-drop-icon").addClass('iconchevron-down');
  $(".form-loaction-drop-icon").removeClass('iconchevron-up');
}


function focusSuggestedField(){
  $("#trendingsearches-wrapper").addClass('display-suggestion-wrapper');
}
function blurSuggestedField(){
  $("#trendingsearches-wrapper").removeClass('display-suggestion-wrapper');
}
