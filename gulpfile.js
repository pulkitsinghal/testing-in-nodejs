var gulp = require('gulp');
var markdownPdf = require('gulp-markdown-pdf');

var paths = ['src/*.md'];

gulp.task('markdown:watch', function() {
  gulp.watch(
      paths,
      { debounceDelay:5000 }, // Options, that are passed to [gaze](https://github.com/shama/gaze)
      ['markdownA5']
  );
});

gulp.task('default', [
    'markdownA5'
    , 'markdown:watch'
]);

gulp.task('markdownA5', function () {
	return gulp.src(paths)
		.pipe(markdownPdf({
            paperFormat: 'A5'
            , paperOrientation: 'landscape'
        }))
		.pipe(gulp.dest('dist/A5'));
});
