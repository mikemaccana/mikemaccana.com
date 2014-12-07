// Run 'gulp' to do the important stuff
var gulp = require('gulp'),
  prefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  livereloadServer = require('tiny-lr')()

var path = require('path');

var log = console.log.bind(console);

gulp.task('sass', function () {
  log('Rebuilding sass')
  gulp
    .src('./public/scss/*.scss')
    .pipe(sass())
    .pipe(prefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload(livereloadServer));
});


// The default task (called when you run `gulp`)
gulp.task('default', ['sass'], function() {
  livereloadServer.listen(35729, function (err) {
    if (err) return log(err);
    // Watch files and run tasks if they change
    gulp.watch('public/scss/*.scss', ['sass']);
  });
  nodemon({
    script: 'server.js',
    ext: 'html js',
    ignore: ['./public/**'],
    nodeArgs: ['--harmony']
  })
  .on('restart', function () {
    console.log('restarted!')
  })
})

