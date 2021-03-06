/*
  Default tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp = require('gulp'),
    config   = require('../gulpconfig'),
    browserSync = require('browser-sync')
;


// Tasks
// ------------------------------

// Default task 
gulp.task('watch',['browserSync'], function () {
  // gulp.watch(''src/jade/**/*.html,   ['markup-'+config.markup.type]);
  gulp.watch('src/jade/**/*.jade',   ['markup-'+config.markup.type]);
  // gulp.watch(config.markup.php.src,   ['markup-'+config.markup.type]);
  gulp.watch('src/scss/**/*.scss',   ['styles']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.scripts.src, ['scripts']);
});

// Default task 
gulp.task('default', ['bower', 'scripts', 'styles', 'images', 'markup-'+config.markup.type, 'watch']);

// alvaiable/planned tasks
// 'scripts', 'styles', 'images', 'markup-html', 'markup-jade', 'markup-php', 'watch' 'bower', 'iconfonts', 
