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
    config        = require('../../gulpConfig').html,
    // specific task modules
    replace       = require('gulp-replace')
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

// build datestamp for cache busting
// ------------------------------
var getStamp = function() {
  var myDate = new Date();

  var myYear = myDate.getFullYear().toString();
  var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
  var myDay = ('0' + myDate.getDate()).slice(-2);
  var mySeconds = myDate.getSeconds().toString();

  var myFullDate = myYear + myMonth + myDay + mySeconds;

  return myFullDate;
};

// Tasks
// ------------------------------

// Cache bust task
gulp.task('cachebust', function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(replace(/screen.min.css\?([0-9]*)/g, 'screen.min.css?' + getStamp()))
    .pipe(replace(/print.min.css\?([0-9]*)/g, 'print.min.css?' + getStamp()))
    .pipe(replace(/webstoemp.min.js\?([0-9]*)/g, 'webstoemp.min.js?' + getStamp()))
    .pipe(gulp.dest(config.dest));
});
