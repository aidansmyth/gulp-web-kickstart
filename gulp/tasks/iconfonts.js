/*
  Font icons tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    // specific task config
    config        = require('../../gulpConfig').iconfonts,
    // specific task modules
    bower = require('gulp-bower')
;

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
gulp.task('iconfonts', function() { 
  return gulp.src(config.src) 
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest(config.dest)); 
});
