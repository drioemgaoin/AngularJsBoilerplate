'use strict';

var argv = require('yargs').argv;

module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.paths.styles)
          .pipe(plugins.sass())
          .pipe(plugins.if(argv.production, plugins.csso()))
          .pipe(plugins.flatten())
          .pipe(gulp.dest(config.deployment.styles));
    };
};
