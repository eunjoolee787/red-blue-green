var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function (){
  return gulp.src('./scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

gulp.task('watch_styles', function (){
  gulp.watch('./scss/**/*.scss', ['styles']);
  gulp.watch('./css/*.css');
});


gulp.task('default', ['styles', 'watch_styles']);