/*
  Scripts tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').scripts,
    // specific task modules
    stylish       = require('jshint-stylish')
    // browserSync   = require('browser-sync')
;


// Tasks
// ------------------------------

// Uglify task
gulp.task('uglify', function() {
  return gulp.src(config.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.changed(config.dest))
    .pipe(plugins.concat(config.filename))
    .pipe(gulp.dest(config.dest))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.dest))
    //.pipe(browserSync.stream());
});

// js Lint task
gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter(stylish));
});

// Global scripts task
gulp.task('scripts', ['jshint', 'uglify']);
