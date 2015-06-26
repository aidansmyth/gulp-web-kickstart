/*
  gulpConfig.js
  ====================================================================
  Something, something, something... Dark side.
  
*/



var src         = './src',
    dest        = './build',
    bower       = './bower_components',
    composer    = './vendor'
;

// Project settings
module.exports = {
  html: {
    src: src + '/**/*.html',
    dest: dest,
    settings: {
      conditionals: true,
      spare:true
    }
  },

  scripts: {
    src: src + '/js/**/*.js',
    dest: dest + '/js',
    libs: {
      src: src + '/libs/**/*',
      dest: dest + '/libs'
    }
    
  },

  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest+'/css',
    settings: {
      // indentedSyntax: true, // Enable .sass syntax!
      imagePath: 'images', // Used by the image-url helper
      errLogToConsole: true
    }
  },

  images: {
    src: src + '/images/**/*.{png,jpg,jpeg,gif,svg}',
    dest: dest + '/images'
  },

  browserSync: {
    server: {
      // Serve up our build folder
      // baseDir: dest
      // or a domain name
      // proxy: 'trovalow.dev'
    }
  },
  
};