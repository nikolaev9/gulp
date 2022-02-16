import uglify from 'gulp-uglify'

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'JS',
				'message': 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.rename({
			extname: '.min.js'
		}))
		.pipe(app.plugins.sourcemaps.init())
		.pipe(uglify())
		.pipe(app.plugins.sourcemaps.write('.'))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}