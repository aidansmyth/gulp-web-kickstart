/*
  gulpConfig.js
  ====================================================================
  Something, something, something... Dark side.
  
*/

// Main variables
var src             = './src',
    dest            = './build',
    bowerDir        = './bower_components';

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
    src: src + '/javascript/**/*.js',
    dest: dest + '/js',
  },

  php: {

  },

  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest+'/css',
    settings: {
      style: 'compressed',
      // indentedSyntax: true, // Enable .sass syntax!
      loadPath: [
        bowerDir + '/bootstrap-sass-official/assets/stylesheets',
        bowerDir + '/fontawesome/scss',
      ],
      imagePath: 'img', // Used by the image-url helper
      errLogToConsole: true
    }
  },

  iconfonts: {
    src: bowerDir + '/fontawesome/fonts/**.*',
    dest: dest + '/fonts'
  },

  images: {
    src: src + '/images/**/*.{png,jpg,jpeg,gif,svg}',
    dest: dest + '/img'
  },

  bower: {
    src: bowerDir,
    dest: dest
  },

  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
      // or proxy a vm server
      // proxy: 'example.local'
    }
  },
  
};