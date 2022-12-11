import gulp from 'gulp';
import plumber from 'gulp-plumber';
<<<<<<< HEAD
<<<<<<< HEAD
import sass from 'gulp-dart-sass';
=======
import less from 'gulp-less';
>>>>>>> 96c1f7f (:cat:)
=======
import sass from 'gulp-dart-sass';
>>>>>>> d3b2b27 (:cat:)
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export const styles = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
=======
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
>>>>>>> 96c1f7f (:cat:)
=======
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
>>>>>>> d3b2b27 (:cat:)
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
=======
  gulp.watch('source/less/**/*.less', gulp.series(styles));
>>>>>>> 96c1f7f (:cat:)
=======
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
>>>>>>> d3b2b27 (:cat:)
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, server, watcher
);
