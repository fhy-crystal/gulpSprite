var gulp = require('gulp');
    spriter = require('gulp-css-spriter');

gulp.task('css', function() {
    return gulp.src('./main.css') // 这个样式里面什么都不用改，是你想要合并的图就要引用这个样式
        .pipe(spriter({
            'spriteSheet': './publish/image/sprite.png', // 这是雪碧图自动合成的图
            'pathToSpriteSheetFromCSS': './image/sprite.png' // 这是在css引用的图片路径
        }))
        .pipe(gulp.dest('./publish'));
})