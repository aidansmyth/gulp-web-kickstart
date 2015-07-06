/*
  Bower tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').bower
    // specific task modules
;

// Tasks
// ------------------------------

// Bower sync task
gulp.task('bower-init', function() { 
  return plugins.bower()
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.src));
}); 

// Bower-js-concat
gulp.task('bower-js-concat', function () {

});

// Bower-style-concat
gulp.task('bower-style-concat', function () {

});

// Bower default task
gulp.task('bower', ['bower-init']);
