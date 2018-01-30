var path = require('path')
var gulp = require('gulp')
var nsp = require('gulp-nsp')
var babel = require('gulp-babel')
var del = require('del')
var sourcemaps = require('gulp-sourcemaps')

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register')

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb)
})

gulp.task('babel', ['clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', function () {
  return del('dist')
})

gulp.task('prepublish', ['nsp', 'babel'])
