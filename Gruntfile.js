module.exports = function(grunt){
  grunt.initConfig({
    inline_angular_templates: {
      dist: {
        options: {
          base: 'www/templates', // (Optional) ID of the <script> tag will be relative to this folder. Default is project dir.
          prefix: '',            // (Optional) Prefix path to the ID. Default is empty string.
          selector: 'html',       // (Optional) CSS selector of the element to use to insert the templates. Default is `body`.
          method: 'append',       // (Optional) DOM insert method. Default is `prepend`.
          unescape: {             // (Optional) List of escaped characters to unescape
              '&lt;': '<',
              '&gt;': '>',
              '&apos;': '\'',
              '&amp;': '&'
          }
        },
        files: {
          'www/index.html': ['www/templates/*.html']
        }
      }
    }
  })
  grunt.loadNpmTasks('grunt-inline-angular-templates');
  grunt.registerTask('default', ['inline_angular_templates']);
};