'use strict';

var rimraf = require('rimraf');

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.task('clean', function (cb) {
            return gulp.src(config.deployment.root + "/*", { read: false })
                .pipe(plugins.rimraf({ force: true }));
        });
    };
};
