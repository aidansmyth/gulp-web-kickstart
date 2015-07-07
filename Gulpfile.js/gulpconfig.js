/*
  gulpConfig.js
  ====================================================================
  Something, something, something... Dark side.
  
*/

// Main variables
var project         = '',
    themeGenerate   = false,
    themeType       = 'html', // Not ready for use. Options: 'html', 'wordpress', 'drupal'
    src             = './src',
    build            = './build',
    dist            = './dist/'+project,
    bowerDir        = './bower_components/';

// Project settings
module.exports = {
  
  bower: {
    src: bowerDir,
    dest: build+'/lib',
    cssFiles: [
      bowerDir+'/**/*.min.css',
      bowerDir+'/**/*.{sass,scss}',
      '!'+bowerDir+'/**/_*.{sass,scss}',
    ],
    cssVendorName: 'vendor.js',
    jsFiles: [
      bowerDir+'foundation/js/foundation.min.js',
      bowerDir+'fastclick/lib/fastclick.js',
      bowerDir+'jquery.cookie/jquery.cookie.js'
    ],
    jsVendorName: 'vendor.js'
  },

  browserSync: {
    files: [build+'/**', '!'+build+'/**.map'],  // Exclude map files
    notify: false,                              // In-line notifications (the blocks of text saying whether you are connected to the BrowserSync server or not)
    open: true,                                 // Set to false if you don't like the browser window opening automatically
    port: 3000,                                 // Port number for the live version of the site; default: 3000
    watchOptions: {
      debounceDelay: 2000                       // Delay for events called in succession for the same file/event
    },
    // Choose serve method
    // proxy: 'localhost:8080',  // Using a proxy instead of the built-in server as we have server-side rendering to do via WordPress
    server: {                 // Serve up our build folder
      baseDir: build
    }
  },

  markup: {
    type: 'jade', // Select markup type: 'html', 'jade', 'php'

    html: {
      src: src + '/**/*.html',
      dest: build
    },
    jade: {
      src: [
        src+'/jade/**/*.jade',
        // '!'+src+'/jade/_partials/**',
        // '!'+src+'/jade/_layouts/**',
        // '!'+src+'/jade/_mixins/**'
      ],
      dest: build,
      settings: {
        pretty: true
      }
    },
    jadePhp:{
      src: [src+'/jade/**/*.jade', '!'+src+'/jade/layouts/**'],
      dest: build,
      settings: {
        pretty: true
      }
    },
    php: {
      src: src + '/**/*.php',
      dest: build,
    },
  },

  scripts: {
    src: src + '/javascript/**/*.js',
    dest: build + '/js',
    filename: 'main.js'
  },

  styles: {
    build: {
      src: [src+'/scss/**/*.scss', '!'+src+'/scss/**/_*.scss'], // Ignore partials
      dest: build+'/css'
    },
    dist: {
      src: [dist+'**/*.css', '!'+dist+'**/*.min.css'],
      minify: { keepSpecialComments: 1, roundingPrecision: 3 },
      dest: dist
    },
    compiler: 'libsass',            // Choose a Sass compiler: 'libsass' or 'ruby-sass'
    autoprefixer: { browsers: ['> 3%', 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ios 6', 'android 4'] },
    rename: { suffix: '.min' },
    minify: { keepSpecialComments: 1, roundingPrecision: 3 },
    rubySass: {                     // Requires the Ruby implementation of Sass; run `gem install sass` if you use this; Compass is not included by default
      loadPath: bowerDir,           // Adds the `bower_components` directory to the load path so you can @import directly
      precision: 6,
      'sourcemap=none': true        // Not yet ready for prime time; Sass 3.4 has srcmaps on by default but this causes some problems in the Gulp toolchain
    },
    libsass: {                      // Requires the libsass implementation of Sass
      includePaths: [bowerDir],             // Adds the `bower_components` directory to the load path so you can @import directly
      precision: 6
    }
  },

  iconfonts: {
    src: bowerDir + '/fontawesome/fonts/**.*',
    dest: build + '/fonts'
  },

  images: {
    src: src + '/images/**/*.{png,jpg,jpeg,gif,svg}',
    dest: build + '/img'
  },

    theme: {
    lang: {
      src: src+'languages/**/*', // Glob matching any language files you'd like to copy over
      dest: build+'languages/'
    },
    php: {
      src: src+'**/*.php',
      dest: build
    }
  },
  
};