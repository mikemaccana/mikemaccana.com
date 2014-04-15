// Run 'gulp' to do the important stuff
var gulp = require('gulp'),
  uglify = require('gulp-less'),
  prefixer = require('gulp-autoprefixer'),
  less = require('gulp-less'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  livereloadServer = require('tiny-lr')()

var path = require('path');

gulp.task('less', function () {
  gulp
    .src('./less/style.less')
    .pipe(less({
      paths: ['less']
    }))
    .pipe(prefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload(livereloadServer));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('less');
  livereloadServer.listen(35729, function (err) {
    if (err) return console.log(err);

    // Watch files and run tasks if they change
    gulp.watch('./less/*.less', function(event) {
      gulp.run('less');
    });
  });
});

gulp.task('develop', function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    ignore: ['./public/**'],
    nodeArgs: ['--harmony']
  })
  .on('change', ['lint'])
  .on('restart', function () {
    console.log('restarted!')
  })
})
