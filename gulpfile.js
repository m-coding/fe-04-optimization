/*eslint-env node */

var gulp = require('gulp'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    newer = require('gulp-newer'),
    resize = require('gulp-image-resize'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename');

/** Default **/
gulp.task('default', ['lint', 'minify', 'compress', 'copy']);

/** Clean Distribution Folder **/
gulp.task('clean', function() {
    return del(['public/dist/**/*']);
});

gulp.task('cleanDryRun', function() {
    return del(['public/dist/**/*'], {dryRun: true}).then(paths => {
        console.log('Files and folders that would be deleted:\n', paths.join('\n'));
    });
});

/** JavasScript Linter **/
gulp.task('lint', function () {
    return gulp.src(['public/src/views/js/main.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/** Minify CSS **/
gulp.task('minifyCSS', function() {
    return gulp.src('public/src/css/styles.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('public/dist/css'));
});

/** Minify JS **/
gulp.task('minifyJS', function() {
    return gulp.src('public/src/views/js/main.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/views/js/'));
});

/** All Minify Tasks **/
gulp.task('minify', ['minifyCSS','minifyJS']);

/** Compress Images **/
gulp.task('resizeThumbs', function() {
    return gulp.src(['public/src/img/th_*', 'public/src/views/images/pizzeria.jpg'])
        // Add the newer pipe to pass through newer images only
        .pipe(newer('public/dist/img'))
        .pipe(resize({ width: 100, height: 62, crop: true }))
        .pipe(gulp.dest('public/dist/img'));
});

gulp.task('compressFolderImg', function() {
    return gulp.src(['public/src/img/*', '!public/src/img/th_*'])
        .pipe(newer('public/dist/img'))
        .pipe(resize({ width: 480 }))
        .pipe(imagemin({ progressive: true })).on('error', errorHandler)
        .pipe(gulp.dest('public/dist/img'));
});

gulp.task('compressFolderImages', function() {
    return gulp.src(['public/src/views/images/*'])
        .pipe(newer('public/dist/views/images'))
        .pipe(resize({ width: 360 }))
        .pipe(imagemin({ progressive: true })).on('error', errorHandler)
        .pipe(gulp.dest('public/dist/views/images'));
});

/** All Image Compression Tasks **/
gulp.task('compress', ['resizeThumbs', 'compressFolderImg', 'compressFolderImages']);

/** Copy Files **/
gulp.task('copyHTML', function() {
    gulp.src('public/src/*.html')
        .pipe(gulp.dest('public/dist'));
    gulp.src('public/src/views/pizza.html')
        .pipe(gulp.dest('public/dist/views/'));
});

gulp.task('copyCSS', function() {
    gulp.src('public/src/views/css/*.css')
        .pipe(gulp.dest('public/dist/views/css'));
});

gulp.task('copyJS', function() {
    gulp.src('public/src/js/perfmatters.js')
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('copyPIZZA', function() {
    gulp.src('public/src/views/images/pizza.png')
        .pipe(gulp.dest('public/dist/views/images/'));
});

/** All Copy File Tasks **/
gulp.task('copy', ['copyHTML','copyCSS','copyJS','copyPIZZA']);

/** Display Errors **/
function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}
