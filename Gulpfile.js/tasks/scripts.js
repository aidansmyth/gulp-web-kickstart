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
    config        = require('../gulpconfig').scripts,
    // specific task modules
    size          = require('gulp-filesize'),
    changed       = require('gulp-changed'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    stylish       = require('jshint-stylish'),
    concat        = require('gulp-concat'),
    rename        = require('gulp-rename'),
    browserSync   = require('browser-sync')
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
gulp.task('uglify', function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(config.dest))
    .pipe(concat('global.js'))
    .pipe(gulp.dest(config.dest))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(browserSync.stream());
});

// js Lint task
gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('jsCopylibs', function() {
  return gulp.src(config.libs.src)
    .pipe(gulp.dest(config.libs.dest))
})

// Global scripts task
gulp.task('scripts', ['jshint', 'uglify']);