'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var argv = require('yargs').argv;
var fs = require('fs');
var config = require("./gulpconfig.json");

var root = require('./bower.json').appPath || 'app';

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, config);
}

gulp.task('clean', getTask('clean'));
gulp.task('lint', getTask('lint'));
gulp.task('build-internal-scripts', ['lint'], getTask('build-internal-scripts'));
gulp.task('build-external-scripts', getTask('build-external-scripts'));
gulp.task('build-views', getTask('build-views'));
gulp.task('build-internal-styles', getTask('build-internal-styles'));
gulp.task('build-external-styles', getTask('build-external-styles'));
gulp.task('build-fonts', getTask('build-fonts'));
gulp.task('build-images', getTask('build-images'));
gulp.task('inject', getTask('inject'));
gulp.task('start-server', getTask('start-server'));
gulp.task('watch', getTask('watch'));

gulp.task('build', [
    "build-internal-scripts",
    "build-external-scripts",
    "build-views",
    "build-internal-styles",
    "build-external-styles",
    "build-fonts",
    "build-images"
]);

if (argv.production) {
  gulp.task('start', ["start-server"], getTask('start-client'));
} else {
  gulp.task('start', getTask('watch'));
}

gulp.task('default', function() {
    runSequence("clean", "build", "inject", "start");
});
