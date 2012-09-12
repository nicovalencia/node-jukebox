/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-css');

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Node Jukebox - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://nico.io/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Nico Valencia; Licensed MIT */'
    },
    min: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'public/development/js/app.js',
          'public/development/js/models/album.js',
          'public/development/js/models/artist.js',
          'public/development/js/models/song.js',
          'public/development/js/collections/albums.js',
          'public/development/js/collections/artists.js',
          'public/development/js/collections/songs.js',
          'public/development/js/main.js'
        ],
        dest: 'public/production/js/engine.min.js'
      },
      libs: {
        src: [
          'public/development/js/libs/underscore.js',
          'public/development/js/libs/backbone.js',
          'public/development/js/libs/handlebars-1.0.0.beta.6.js'
        ],
        dest: 'public/production/js/libs.min.js'
      }
    },
    cssmin: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'public/development/stylesheets/normalize.css',
          'public/development/stylesheets/main.css'
        ],
        dest: 'public/production/stylesheets/style.min.css'
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'min cssmin');

};
