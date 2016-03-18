$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });
});

// A setting to initialize dynamically added tooltips, ex when click on svg logos
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});