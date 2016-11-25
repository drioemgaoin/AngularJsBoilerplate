'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        var condition = function (file) {
            return file.path.endsWith("index.html");
        };

        gulp.src(config.paths.views)
            .pipe(plugins.flatten())
            .pipe(plugins.if(condition, gulp.dest(config.deployment.root), gulp.dest(config.deployment.views)));
    };
};
