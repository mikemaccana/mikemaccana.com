// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Configure Grunt
  grunt.initConfig({

    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    express: {
      all: {
        options: {
          port: 9000,
          bases: __dirname,
          livereload: true
        }
      }
    },

    // Do less magic
    less: {
      development: {
        options: {
          paths: ["./less"],
          yuicompress: true
        },
        files: {
          "./css/style.css": "./less/style.less"
        }
      }
    },

    watch: {
      all: {
        files: 'index.html',
        options: {
          livereload: true
        }
      },
      less: {
        files: ["./less/*"],
        tasks: ["less"],
        options: {
          livereload: true
        }
      }
    },

    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });

  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
};