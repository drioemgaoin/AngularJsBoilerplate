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
    }
}

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('clean', getTask('clean'));
gulp.task('lint', getTask('lint'));
gulp.task('build-internal-scripts', getTask('build-internal-scripts'));
gulp.task('build-views', getTask('build-views'));
gulp.task('inject-scripts', getTask('inject-scripts'));

gulp.task('build', ["build-internal-scripts", "build-views"]);
gulp.task('inject', ["inject-scripts"]);

gulp.task('default', ["clean"], function() {
    runSequence("build", "inject", "lint");
});
