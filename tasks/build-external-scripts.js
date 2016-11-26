'use strict';

var argv = require('yargs').argv;

module.exports = function(gulp, plugins, config) {
    return function() {
        var jsFilter = plugins.filter('**/*.js', { restore: true });

        return gulp.src('./bower.json')
            .pipe(plugins.mainBowerFiles({ overrides: config.bowerOverrides }))
            .pipe(jsFilter)
            .pipe(plugins.if(argv.production, plugins.uglify()))
            .pipe(plugins.concat('vendor.js'))
            .pipe(gulp.dest(config.deployment.scripts));
    };
};
