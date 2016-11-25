'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.task('inject-scripts', function() {
          var sources = gulp.src(config.deployment.scripts + '/internal.min.js', {read: false});

          return gulp.src(config.deployment.root + '/index.html')
              .pipe(plugins.inject(sources))
              .pipe(gulp.dest(config.deployment.root));
        });
    };
};
