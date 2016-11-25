'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.task('lint', function() {
          return gulp.src('./source/**/*.js')
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish'));
        });
    };
};
