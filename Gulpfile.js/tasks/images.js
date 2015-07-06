/*
  Images tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    handleErrors = require('../utils/handleErrors'),
    plugins      = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config       = require('../gulpconfig').images
    // specific task modules
    // browserSync   = require('browser-sync')
;


// Tasks
// ------------------------------

// Optimise images
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.changed(config.dest)) // Ignore unchanged files
    .pipe(plugins.imagemin()) // Optimize
    .pipe(gulp.dest(config.dest));
    // .pipe(browserSync.reload({stream:true}));
});