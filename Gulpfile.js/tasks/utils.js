/*
  Default tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').utils,
    // specific task modules
    del           = require('del');


// Tasks
// ------------------------------

// Totally wipe the contents of the `dist` folder to prepare for a clean build; additionally trigger Bower-related tasks to ensure we have the latest source files
gulp.task('utils-wipe-dist', ['bower'], function(cb) {
  del(config.wipeDist, cb)
});

// Totally wipe the contents of the `build`
gulp.task('utils-wipe-build', function(cb) {
  del(config.wipeBuild, cb)
});

// Clean out junk files after build
gulp.task('utils-clean', ['build', 'utils-wipe'], function(cb) {
  del(config.clean, cb)
});

// Copy files from the `build` folder to `dist/[project]`
gulp.task('utils-dist', ['utils-clean'], function() {
  return gulp.src(config.dist.src)
    .pipe(gulp.dest(config.dist.dest));
});
