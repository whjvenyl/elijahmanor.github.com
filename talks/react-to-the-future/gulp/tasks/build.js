var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').watch;

gulp.task('build', ['browserify', 'styles', 'html', 'markdown', 'fonts', 'images', 'vendor', 'pens'], function() {
  gulp.src(config.src).pipe(connect.reload());
});
