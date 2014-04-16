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

var log = console.log.bind(console);

gulp.task('less', function () {
  log('Rebuilding less')
  gulp
    .src('./public/less/style.less')
    .pipe(less({
      paths: ['public/less']
    }))
    .pipe(prefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload(livereloadServer));
});

// The default task (called when you run `gulp`)
gulp.task('default', ['less'], function() {
  livereloadServer.listen(35729, function (err) {
    if (err) return log(err);
    // Watch files and run tasks if they change
    gulp.watch('public/less/*.less', function(event){
      log('Less files have changed');
      gulp.run('less');
    });
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
