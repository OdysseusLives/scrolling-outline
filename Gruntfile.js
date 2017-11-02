module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    bower_concat: {
      all: {
        dest: {
          'js': 'build/_bower.js',
          'css': 'build/_bower.css'
        }
      }
    },
    serve: {
      options: {
        port: 9000
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
