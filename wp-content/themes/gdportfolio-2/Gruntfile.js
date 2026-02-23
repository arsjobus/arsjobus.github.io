module.exports = function(grunt) {

  grunt.initConfig({
		copy: {
			
		},
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
		less : {
			development: {
				files: {
					'style.css' : 'src/less/style.less'
				}
			}
		},
    watch: {
      files: ['src/**/*.js', 'src/**/*.less'],
      tasks: ['jshint', 'less']
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
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['jshint', 'less']);

};