'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
      return gulp.src(config.paths.scripts)
          //.pipe(plugins.uglify())   // TODO: only for production
          .pipe(plugins.concat('internal.js'))
          .pipe(gulp.dest(config.deployment.scripts));
    };
};
