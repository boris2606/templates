
var autoprefixer = require('gulp-autoprefixer'),
    gulp = require('gulp'), 
    uglify = require('gulp-uglify'), 
    concat = require('gulp-concat'), 
    csso = require('gulp-csso'), 
    sass = require('gulp-sass'), 
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    CleanCSS = require('gulp-clean-css'),
    jade = require('gulp-jade'),
    bs = require("browser-sync").create()

gulp.task('serve',function(){
    var files = [
        'build/**/*.*'
    ]
    bs.init(files, {
        server: "build"
    });
});

gulp.task('min-js', function() {
  return gulp.src('source/javascripts/for-min-js/*.js')
    .pipe(concat('min.js'))
    .pipe(uglify())
    .pipe(notify("Done!"))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('js', function() {
  return gulp.src('source/javascripts/*.js')
    .pipe(uglify())
    .pipe(notify("Done!"))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('jade', function(){
  gulp.src('source/template-jade/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(notify("Done!"))
    .pipe(gulp.dest('build/'));
});

gulp.task('css', function() {
  return gulp.src('build/css/for-min-css/*.css')
    .pipe(concatCSS('min.css'))
    .pipe(notify("Done!"))
    .pipe(csso())
    .pipe(gulp.dest('build/css/min-css/'));
});

gulp.task('sass', function () {
  return gulp.src('source/styles-scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 12 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('build/css/'))
    .pipe(notify("Done!"));
});

gulp.task('default', ['serve','sass'], function () {
    gulp.watch('./source/styles-scss/**/*.scss', ['sass']); 
    gulp.watch('./source/javascripts/*.js', ['js']);
    gulp.watch('./source/javascripts/for-min-js/*.js', ['min-js']);
    gulp.watch('./build/css/*.css', ['css']);
    gulp.watch('./source/template-jade/*.jade',['jade']);
});

// Устанавливаем rimraf глобально в системе:
// npm install rimraf -g
// Затем переходим в папку с node_modules и удаляем её такой командой:
// rimraf node_modules
