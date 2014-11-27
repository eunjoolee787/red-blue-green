var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function (){
  return gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});

gulp.task('watch_styles', function (){
  gulp.watch('./sass/**/*.scss', ['styles']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('css/*.css', notifyLiveReload);
});

gulp.task('express', function(){
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('default', ['watch_styles']);