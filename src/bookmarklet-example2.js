// Bookmarklet template
// use http://chriszarate.github.io/bookmarkleter/ 
// to generate bookmarklet

/*  Compressed version
    javascript:void%20function(){(function(){if(%22undefined%22==typeof%20b){var%20t=%22http://192.168.56.101/bookmarklets/trovalow-bookmarklet/dist/%22,n=window,o=n.document,i=(n.location,o.getElementsByTagName(%22head%22)[0]||o.documentElement);e=encodeURIComponent,x=%22undefined%22,v=t+%22css/style-bookmarklet.css%22,c=o.createElement(%22link%22),c.setAttribute(%22rel%22,%22stylesheet%22),c.setAttribute(%22type%22,%22text/css%22),c.setAttribute(%22href%22,v),i.appendChild(c),u=t+%22js/bookmarklet-external.js%22,s=o.createElement(%22script%22),s.setAttribute(%22type%22,%22text/javascript%22),s.setAttribute(%22src%22,u),i.appendChild(s)}else%20b.init()})()}();
*/
javascript:(function () {
    // the minimum version of jQuery we want
    var v = "1.8.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
        var done = false;
        var script = document.createElement("script");
        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
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

    function initMyBookmarklet() {
        if (typeof b == 'undefined') {
            // External source
            var r='http://192.168.56.101/bookmarklets/trovalow-bookmarklet/dist/',
                w=window,
                d=w.document,
                l=w.location,
                h=d.getElementsByTagName('head')[0] || d.documentElement;
                e=encodeURIComponent,
                x='undefined',
                // CSS
                v=r+'css/style-bookmarklet.css',
                c=d.createElement('link')
                c.setAttribute('rel', 'stylesheet');
                c.setAttribute('type', 'text/css');
                c.setAttribute('href', v);
                h.appendChild(c),
                // Scripts
                u=r+'js/bookmarklet-external.js',
                s=d.createElement('script');
                s.setAttribute('type', 'text/javascript');
                s.setAttribute('src', u);
                h.appendChild(s);
        } else {
            b.init();
        }
    }
    
})();