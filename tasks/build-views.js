'use strict';

var rimraf = require('rimraf');

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.src(config.paths.views)
            .pipe(plugins.flatten())
            .pipe(gulp.dest(config.deployment.views));
    };
};
