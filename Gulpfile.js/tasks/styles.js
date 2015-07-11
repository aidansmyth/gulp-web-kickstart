/*
  Style tasks
  --------------------------------------------------------------------

*/

// Load requirements
// ------------------------------
var gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    handleErrors  = require('../utils/handleErrors'),
    plugins       = require('gulp-load-plugins')({ camelize: true }),
    // specific task config
    config        = require('../gulpconfig').styles,
    // specific task modules
    autoprefixer  = require('autoprefixer-core')
;


// Tasks
// ------------------------------

gulp.task('styles-lint', function() {
  gulp.src(config.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(scsslint());
});

// Build stylesheets from source Sass files, autoprefix, and make a minified copy (for debugging) with rubySass
gulp.task('styles-ruby-sass', function() {
  return gulp.src(config.build.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.rubySass(config.rubySass))
    .pipe(plugins.postcss([autoprefixer(config.autoprefixer)]))
    .pipe(gulp.dest(config.build.dest)) // Drops the unminified CSS file into the `build` folder
    .pipe(plugins.rename(config.rename))
    .pipe(plugins.minifyCss(config.minify))
    .pipe(gulp.dest(config.build.dest)) // Drops a minified CSS file into the `build` folder for debugging
});

// Build stylesheets from source Sass files, autoprefix, and make a minified copy (for debugging) with libsass
gulp.task('styles-libsass', function() {
  return gulp.src(config.build.src)
    .pipe(plugins.plumber({ errorHandler: handleErrors }))
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass(config.libsass))
      .pipe(plugins.postcss([autoprefixer(config.autoprefixer)]))
    .pipe(plugins.sourcemaps.write()) // Write internal sourcemap
    .pipe(gulp.dest(config.build.dest)) // Drops the unminified CSS file into the `build` folder
    .pipe(plugins.rename(config.rename))
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.minifyCss(config.minify))
    .pipe(plugins.sourcemaps.write('./')) // Write external sourcemap
    .pipe(gulp.dest(config.build.dest)); // Drops a minified CSS file into the `build` folder for debugging
});

// Copy stylesheets from the `build` folder to `dist` and minify them along the way


// Easily configure the Sass compiler from `../gulpconfig.js`
gulp.task('styles', ['styles-'+config.compiler]);
