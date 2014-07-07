module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
        dist: {
            sassDir: 'sass',
            cssDir: 'css',
        }
    },
      watch: {
        scripts: {
            files: ['sass/*.scss'],
            tasks: ['compass'],
            options: {
                spawn: false,
            },
          }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
