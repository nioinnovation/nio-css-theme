const gulp = require('gulp');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const scss = require('postcss-scss');
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

const scssConfig = { syntax: scss };
const processors = {
  pre: [ cssnext() ],
  post: [ cssnano() ],
};

gulp.task('clean', () =>
    gulp.src('./dist/**/*', { read: false })
      .pipe(clean())
);

gulp.task('css:bem', () =>
  gulp.src('./bem/all.scss')
    .pipe(postcss(processors.pre, scssConfig))
    .pipe(sass())
    .pipe(rename('nio.bem.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(postcss(processors.post))
    .pipe(rename('nio.bem.min.css'))
    .pipe(gulp.dest('./dist'))
);

gulp.task('css:modules', () =>
  gulp.src('./modules/**/*.scss')
    .pipe(postcss(processors.pre, scssConfig))
    .pipe(sass())
    .pipe(gulp.dest('./dist/modules'))
);

gulp.task('default', gulp.series('clean', gulp.parallel('css:bem', 'css:modules')));

gulp.task('watch', () =>
  gulp.watch(['bem/**/*.scss', 'shared/**/*.scss', 'modules/**/*.js'], gulp.parallel('css:bem', 'css:modules'))
);
