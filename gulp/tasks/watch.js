'use strict';

import config from '../config';
import gulp   from 'gulp';

gulp.task('watch', ['browserSync'], function() {

  global.isWatching = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.scripts.src, ['eslint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.html.src, ['html']);

});