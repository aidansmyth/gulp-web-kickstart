javascript: (function() {
    var bmlLoaded = false;
    
    s = document.createElement("script");
    s.type = "text/javascript";
    // Dev testing source
    s.src =  'http://trovalow.dev/bookmarklet/dist/js/trovalow-bookmarklet.min.js';
    // Live Source
    // s.src = 'http://trovalow.com/bookmarklets/trovalow-bookmarklet/dist/js/bookmarklet-external.min.js';
    document.body.appendChild(s);
})();