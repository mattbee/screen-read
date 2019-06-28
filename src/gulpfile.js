const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('scss', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('clean', () => {
    return del([
        'assets/css/*',
    ]);
});

gulp.task('watch', function watch() {
  gulp.watch('scss/**/*.scss', (done) => {
      gulp.series(['clean', 'scss'])(done);
  });
});

gulp.task('default', gulp.series(['clean', 'scss']));