var gulp = require('gulp');
var panini = require('panini');
var handlebars = require('handlebars');

gulp.task('default', function() {
	panini.refresh();
	gulp.src('src/pages/*.html')
	    .pipe(panini({
	        root: 'pages/',
	        layouts: 'src/layouts/',
	      	partials: 'src/partials/',
	      	helpers: 'src/helpers/',
	      	data: 'src/data/'
	    }))
	    .pipe(gulp.dest('build/'));
});
