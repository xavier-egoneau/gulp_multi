/*!
anchor focus
Fixes anchor focus in Chrome/Safari/IE
*/
// by setting the tabindex of the target container to -1 on click/enter
// see -> http://stackoverflow.com/questions/3572843/skip-navigation-link-not-working-in-google-chrome/6188217#6188217

/*$(document).ready(function(){

  $("a[href^='#']").click(function(evt){
    var anchortarget = $(this).attr("href");
    $(anchortarget).attr("tabindex", -1).focus();
  });

  // Fixes anchor focus in Chrome/Safari/IE by setting the tabindex of the
  // target container to -1 on page load
  if (window.location.hash) {
    $(window.location.hash).attr("tabindex", -1).focus();
  }
});*/
