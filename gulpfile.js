var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./development/sass/main.scss')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('production'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp.src('./development/index.html')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('production'));
});

gulp.task('js', function() {
  return gulp.src('./development/scripts/*.js')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(gulp.dest('production/scripts'));
});

gulp.task('sass:build', function() {
  return gulp.src('./development/sass/main.scss')
    .pipe({errorHandler: errorAlert})
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest('production'));
});

gulp.task('js:build', function() {
  return gulp.src('./development/scripts/*.js')
    .pipe(plumber({errorHandler: errorAlert}))
    .pipe(uglify())
    .pipe(gulp.dest('production/scripts'));
});

gulp.task('build', ['sass:build', 'js:build']);

gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('html-watch', ['html'], function() {
  return browserSync.reload();
});

gulp.task('serve', ['sass', 'js', 'html'], function() {
  browserSync.init({
    server: {
      baseDir: './production'
    }
  });

  gulp.watch('./development/sass/*/*.scss', ['sass']);
  gulp.watch('./development/scripts/*.js', ['js-watch']);
  gulp.watch('./development/*.html', ['html-watch']);
});

gulp.task('default', ['serve']);

function errorAlert(error){
  notify.onError({title: "Gulp Error", message: "Beep beep beep, stuffs going down. Check the console.", sound: true})(error); //Error Notification
  console.log(error.toString()); //Prints Error to Console
  this.emit("end"); //End function
}
