var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

gulp.task('build', function () {
  return gulp.src(['./vendor/*.js', './lib/*.js'])
    .pipe(concat(pkg.name + '.js'))
    .pipe(gulp.dest('./public/javascripts'))
    .pipe(rename(pkg.name + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
})