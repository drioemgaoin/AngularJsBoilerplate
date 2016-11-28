'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.paths.images)
            .pipe(plugins.imagemin({
              optimizationLevel: 3,
              progessive: true,
              interlaced: true
            }))
            .pipe(plugins.flatten())
            .pipe(gulp.dest(config.deployment.images))
            .pipe(plugins.size());
    };
};
