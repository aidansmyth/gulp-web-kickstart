/*
  Markup tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').markup,
    // specific task modules
    fs            = require('fs')
;


// Tasks
// ------------------------------

// HTML task
gulp.task('markup-html', function() {
  return gulp.src(config.html.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.changed(config.html.dest));
});

// Markup Jade task
gulp.task('markup-jade', function() {
  return gulp.src(config.jade.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    // .pipe(plugins.changed(config.jade.dest, {extension: '.html'}))
    .pipe(plugins.data(function (file) {
      // return require(config.jade.dataFile)
      return JSON.parse(fs.readFileSync(config.jade.dataFile));
    }))
    .pipe(plugins.jade(config.jade.settings))
    .pipe(gulp.dest(config.jade.dest));
});

// Markup PHP task
gulp.task('markup-php', function() {
  return gulp.src(config.php.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    // .pipe(plugins.changed(config.php.dest, {extension: '.php'}))
});

// Global scripts task
gulp.task('markup', ['markup-'+config.type]);
