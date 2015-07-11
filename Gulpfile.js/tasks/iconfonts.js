/*
  Icon font tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------

var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').iconfonts
    // specific task modules
;

// Tasks
// ------------------------------

// iconfonts task
gulp.task('iconfonts', function() { 
  return gulp.src(config.src) 
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest)); 
});
