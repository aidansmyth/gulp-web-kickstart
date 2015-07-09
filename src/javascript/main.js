/*
  
*/

// Variables
// -------------------------------------------------------------------
console.log("main.js loaded");

// Owl carousel settings
jQuery(document).ready(function(){
  jQuery(".owl-carousel").owlCarousel({
    navigation: false,
    slideSpeed: 300,
    singleItem: true,
    loop: true,
    autoPlay: true,
    autoPlayHoverPause: true,
    navRewind: true
  });
});
