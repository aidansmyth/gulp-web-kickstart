/*
  Scripts tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    // specific task config
    config        = require('../../gulpConfig').browserSync,
    // specific task modules
    browserSync = require('browser-sync').create();

// Error handler
// ------------------------------
var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);

  this.emit('end');
};

// Tasks
// ------------------------------

// Browser sync task
gulp.task('browserSync', function() { 
  browserSync.init({
        proxy: "trovalow.dev"
    });
}); 

// BrowserSync reload all Browsers
gulp.task('browserSync-reload', function () {
  browserSync.reload();
});
