module.exports = function(grunt) {

  grunt.initConfig({
    copy: {},

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    less: {
      development: {
        files: {
          'style.css': 'src/less/style.less'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'style.min.css': ['style.css']
        }
      }
    },

    watch: {
      files: ['src/**/*.js', 'src/**/*.less'],
      tasks: ['jshint', 'less', 'cssmin']
    },

    wiredep: {
      task: {
        src: ['index.php']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['jshint', 'less', 'cssmin']);
};