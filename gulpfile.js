'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var root = require('./bower.json').appPath || 'app';

var config = {
    paths: {
        scripts: './source/**/*.js',
        views: ['./source/views/**/*.html'],
        styles: './source/**/*.scss',
        fonts: []
    },
    deployment: {
        root: './dist',
        scripts: './dist/scripts',
        views: './dist/views',
        styles: './dist/css',
        fonts: './dist/fonts'
    },
    bowerOverrides: {
        "font-awesome": {
        "main": [
          "./scss/font-awesome.scss",
          "./fonts/*"
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
gulp.task('build-styles', getTask('build-styles'));
gulp.task('build-fonts', getTask('build-fonts'));
gulp.task('inject', getTask('inject'));
gulp.task('start-server', getTask('start-server'));

gulp.task('build', ["build-internal-scripts", "build-external-scripts", "build-views", "build-styles", "build-fonts"]);
gulp.task('start', ["start-server"], getTask('start-client'));

gulp.task('default', function() {
    runSequence("clean", "build", "inject", "lint", "start");
});
