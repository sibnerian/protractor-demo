module.exports = function(grunt) {

  grunt.initConfig({
    protractor: {
      main: {
        options: {
          configFile: "test/conf.js"
        }
      },
    },
    phantom: {
      protractor: {
        options: {
          port: 4444
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-phantom');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['phantom', 'protractor']);

};
