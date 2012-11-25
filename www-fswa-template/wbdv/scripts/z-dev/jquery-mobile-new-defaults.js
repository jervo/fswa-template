/*
*
* Customize jQuery Mobile default settings
*
*/
$(document).bind("mobileinit", function(evt) {
   // Change jQuery default settings
   $.mobile.defaultPageTransition = "none";
   $.mobile.defaultDailogTransition = "flip";
});
