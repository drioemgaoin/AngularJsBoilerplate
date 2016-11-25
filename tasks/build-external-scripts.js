'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        var jsFilter = plugins.filter('**/*.js', { restore: true });

        return gulp.src('./bower.json')
            .pipe(plugins.mainBowerFiles({ overrides: config.bowerOverrides }))
            .pipe(jsFilter)
            .pipe(plugins.uglify())   // TODO: only for production
            .pipe(plugins.concat('vendor.js'))
            .pipe(gulp.dest(config.deployment.scripts));
    };
};
