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
    size          = require('gulp-filesize'),
    changed       = require('gulp-changed'),
    minifyHTML    = require('gulp-minify-html')
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

// Uglify task
gulp.task('htmlmin', function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(config.dest))
    .pipe(minifyHTML(config.settings))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

// Global scripts task
gulp.task('html', ['htmlmin']);