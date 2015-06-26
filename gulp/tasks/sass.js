/*
  Style tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    plumber       = require('gulp-plumber'),
    notify        = require('gulp-notify'),
    // specific task config
    config        = require('../../gulpConfig').sass,
    // specific task modules
    size          = require('gulp-filesize'),
    changed       = require('gulp-changed'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    rubySass      = require('gulp-ruby-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    scsslint      = require('gulp-scss-lint'),
    minifyCss     = require('gulp-minify-css'),
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

gulp.task('scss-lint', function() {
  gulp.src(config.src)
    .pipe(scsslint());
});

gulp.task('sass', function() {
    return gulp.src(config.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(changed(config.dest))
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});
