/*
  
*/

// Variables
// -------------------------------------------------------------------
var live = false;
var debug = true;
var loaded = false;
var running = false;
var jqv = '1.8.3';

var restEndPoint = 'http://trovalow.dev/restendpoint/services';

var root = '';
var dest = '';

if(live){
  root = 'http://trovalow.com';
  dest = root + '/bookmarklet/';
} else {
  root = 'http://trovalow.dev';
  dest = root + '/bookmarklet/dist/';
}

var cssPath = dest + 'css/';
var jsPath = dest + 'js/';
console.log('test');



// Setup
// -------------------------------------------------------------------

// Bootstrap Bookmarklet
// --------------------------------
// Description:
// 

function boostrapBML () {
  if (debug) console.log('Bootstrapping bookmarklet');
  // check jQuery
  // check prior inclusion and version
  if (window.jQuery === undefined || window.jQuery.fn.jquery < jqv) {
    var done = false;
    var script = document.createElement("script");
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + jqv + "/jquery.min.js";
    script.onload = script.onreadystatechange = function(){
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        initMyBookmarklet();
      }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    initMyBookmarklet();
  }
  
}


// Initialise Bookmarklet
// --------------------------------
// Description:
// 

function initMyBookmarklet() {
  if (debug) console.log('init bookmarklet');

  if(running === false){
    // load css
    $('head').append('<link rel="stylesheet" href="' + cssPath + 'bookmarklet.min.css" type="text/css" />');
    running = true;
    createOverlay();
  } else {

  }
  
}



// Utilities
// -------------------------------------------------------------------

function removeBML () {
  
}

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------






// Interface
// -------------------------------------------------------------------

// Remove bookmarklet
// --------------------------------
// Description:
// 
// @param: 
function createOverlay () {
  if (debug) console.log('Create overlay');

  $('body').append('<div class="bml-overlay"></div>');
  getRest();
}

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------






// Main functions
// -------------------------------------------------------------------

// REST
// --------------------------------

// Get data
// ------------------
function getRest () {
  if (debug) console.log('Start ajax call');

  $.ajax({
    url: restEndPoint
  }).then(function(data) {
    $('.bml-overlay').append(data.nid);
    $('.bml-overlay').append(data.node_title);
  });
}
// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------






// Page data
// --------------------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------

// 
// ------------------







// Launch
// -------------------------------------------------------------------
boostrapBML();
