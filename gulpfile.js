var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

var paths = {
  jsSource: ['./public/app/**/*.js', '!public/config.js'],
  sassSource: ['./public/assets/styles/**/*.scss']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./public'));
});

gulp.task('styles', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/assets/styles'));
});

// gulp.task('minify-css', function() {
//   return gulp.src('public/assets/styles/style.css')
//     .pipe(gulp.dest('./public/assets/styles'));
// });

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['styles']);
});

gulp.task('default', ['watch', 'js', 'styles']);
