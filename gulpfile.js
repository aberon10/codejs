'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es5', () => {
    gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', () => {
    gulp.watch('src/**/*.js', ['es5']);
});