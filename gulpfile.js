'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var root = require('./bower.json').appPath || 'app';

var config = {
    paths: {
        scripts: './source/app/**/*.js',
        views: ['./source/**/*.html']
    },
    deployment: {
        root: './dist',
        scripts: './dist/scripts',
        views: './dist/views'
    },
    bowerOverrides: {
      bootstrap: {
          main: [
              "less/bootstrap.less",
              "dist/css/bootstrap.css",
              "dist/js/bootstrap.js",
              "dist/fonts/*.*"
          ]
      }
    }
}

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('clean', getTask('clean'));
gulp.task('lint', getTask('lint'));
gulp.task('build-internal-scripts', getTask('build-internal-scripts'));
gulp.task('build-external-scripts', getTask('build-external-scripts'));
gulp.task('build-views', getTask('build-views'));
gulp.task('inject-scripts', getTask('inject-scripts'));
gulp.task('start-server', getTask('start-server'));

gulp.task('build', ["build-internal-scripts", "build-external-scripts", "build-views"]);
gulp.task('inject', ["inject-scripts"]);
gulp.task('start-client', ["start-server"], getTask('start-client'));

gulp.task('default', function() {
    runSequence("clean", "build", "inject", "lint", "start-client");
});
