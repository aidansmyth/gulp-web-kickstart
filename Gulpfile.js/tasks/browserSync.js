/*
  Browser Sync tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------

var gulp          = require('gulp'),
    // specific task config
    config        = require('../gulpconfig').browserSync
    // specific task modules
    browserSync = require('browser-sync').create();
;

// Tasks
// ------------------------------

// Browser sync task
gulp.task('browserSync', function() { 
  browserSync.init(config);
}); 

// BrowserSync reload all Browsers
gulp.task('browserSync-reload', function () {
  browserSync.reload();
});
