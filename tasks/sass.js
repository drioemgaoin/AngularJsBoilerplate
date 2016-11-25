'use strict';

module.exports = function(gulp, plugins, config) {
    return function() {
        gulp.task('scss', function() {
            gulp.src('./src/assets/scss/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('./src/assets/stylesheets/'));
        });
    };
}
