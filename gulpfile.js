'use strict';

var gulp  = require('gulp'),
    mocha = require('gulp-mocha')

gulp.task('mocha', function() {

  return gulp
    .src([
      './test/helpers/runner.js',
      './test/unit/**/*.js',
      './test/functional/**/*.js'
    ], {read: false})
    .pipe(mocha({reporter: 'spec'}))

})

gulp.task('t', ['mocha'])
