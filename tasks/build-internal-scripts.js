'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
      return gulp.src(config.paths.scripts)
          .pipe(plugins.uglify())
          .pipe(plugins.concat('internal.min.js'))
          .pipe(gulp.dest(config.deployment.scripts));
    };
};
