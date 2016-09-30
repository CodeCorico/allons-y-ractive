'use strict';

module.exports = function($gulp) {
  $gulp.task('ractive', function(done) {

    $gulp.src([
      'node_modules/ractive/ractive.js',
      'node_modules/ractive/ractive.js.map',
      'node_modules/ractive/ractive.min.js',
      'node_modules/ractive/ractive.min.js.map',
      'node_modules/ractive-require/dist/*'
    ])
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'ractive';
};
