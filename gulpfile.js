const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const deploy = require('gulp-gh-pages')

// Builds ejs
gulp.task('ejs', done => {
  gulp
    .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./dist"))
  done();
})

// Builds css
gulp.task('css', done => {
  gulp.src("public/**/*.css")
    .pipe(gulp.dest("./dist/css"))
  done();
})

// Deploys /dist recursively
gulp.task('deploy', done => {
  gulp.src(['dist/**/*.html', 'dist/**/*.css', 'dist/**/*.js', 'dist/CNAME'])
    .pipe(deploy({
      remoteUrl: 'https://github.com/trustless-services/trustless-web-gulp.git',
      origin: 'origin',
      branch: 'gh-pages',
      push: true,
      force: true
    }));
  done();
})