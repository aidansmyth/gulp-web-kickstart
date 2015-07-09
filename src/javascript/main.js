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

// Build menu from json
jQuery(function () {     
    
  function parseMenu(ul, menu) {
    for (var i=0;i<menu.length;i++) {
      var li=jQuery(ul).append('<li><a href="'+menu[i].link+'">'+menu[i].name+'</a></li>');
      if (menu[i].sub!==null) {
        var subul=jQuery('<ul id="submenu'+menu[i].link+'"></ul>');
        jQuery(li).append(subul);
        parseMenu(jQuery(subul), menu[i].sub);
      }
    }
  }

  var menu=jQuery('#menu');
  parseMenu(menu, JSON.menu);

 });
