'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.paths.styles)
          .pipe(plugins.sass())
          .pipe(plugins.flatten())
          .pipe(gulp.dest(config.deployment.styles));
    };
};
