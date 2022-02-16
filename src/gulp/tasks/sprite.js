import svgSprite from 'gulp-svg-sprite'

export const sprite = () => {
	return app.gulp.src(app.path.src.sprite)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'SVG',
				'message': 'Error: <%= error.message %>'
			})
		))
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: app.path.build.sprite,
					example: false
				}
			}
		}))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browsersync.stream())
}