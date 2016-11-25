'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.task('inject-scripts', function() {
          var sources = gulp.src(config.deployment.scripts + '/**/*.js', {read: false})
            .pipe(plugins.order(["vendor.js", "internal.js"]));

          return gulp.src(config.deployment.root + '/index.html')
              .pipe(plugins.inject(sources, {
                  ignorePath: 'dist',
                  addRootSlash: false
              }))
              .pipe(gulp.dest(config.deployment.root));
        });
    };
};
