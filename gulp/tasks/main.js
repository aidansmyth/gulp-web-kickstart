/*
  Default tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp = require('gulp'),
    config   = require('../../gulpConfig'),
    browserSync = require('browser-sync')
;


// Tasks
// ------------------------------

// Default task 
gulp.task('watch', ['browserSync'], function () {
  gulp.watch(config.html.src,   ['html']);
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.scripts.src, ['scripts']);
});

// Default task 
gulp.task('default', ['html', 'jsCopylibs', 'scripts', 'sass', 'images', 'cachebust', 'watch']);
