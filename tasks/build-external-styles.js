'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        var scssFilter = plugins.filter('**/*.scss', { restore: true });

        return gulp.src('./bower.json')
            .pipe(plugins.mainBowerFiles({ overrides: config.bowerOverrides }))
            .pipe(scssFilter)
            .pipe(plugins.sass())
            .pipe(plugins.flatten())
            .pipe(gulp.dest(config.deployment.styles));
    };
};
