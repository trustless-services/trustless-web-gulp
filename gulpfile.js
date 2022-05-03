const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
const deploy = require('gulp-gh-pages')

// Builds ejs and deploys /dist recursively
gulp.task('ejs', done => {
  gulp
    .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./dist"))
    .pipe(deploy());
  done();
})