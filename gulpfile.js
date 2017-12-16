var gulp = require('gulp'),
gulp.task('clean', function() { /* just code */ });
gulp.task('sass', function() { /* just code */ });
gulp.task('js', function() { /* just code */ });
gulp.task('jade', function() { /* just code */ });
gulp.task('watch', function() { /* just code */ });
gulp.task('default', gulp.series(
 'clean',
 gulp.parallel(
 'sass',
 'js',
 'jade'
 ),
 'watch'
));