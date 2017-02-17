var gulp = require('gulp');
var watch = require('gulp-watch');

//For Imagex
var newer = require('gulp-newer');
var imagein = require('gulp-imagemin');

gulp.task('stream', function () {
    // Endless stream mode 
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

//1. IJntroduction - Hello Gulp
gulp.task('hello-world', function(){
    console.log('hello gulp');
});

//2. IMAGEX - image compressor
gulp.task('imagex', function() {
	var folder = "./";
  	var out = folder.build + 'images/';
  	
  	return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
});

gulp.task('watch', function(){
	gulp.watch('KeepAnEye/*.js', function(){
		console.log("i am watching you");
	});
});

