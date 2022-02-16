import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import groupCssMedia from 'gulp-group-css-media-queries'
import cleanCss from 'gulp-clean-css'

const sass = gulpSass(dartSass)

export const scss = () => {
	return app.gulp.src(app.path.src.scss, {sourcemaps: true})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				'title': 'SCSS',
				'message': 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}, false))
		.pipe(groupCssMedia())
		.pipe(cleanCss())
		.pipe(app.plugins.rename({
			extname: '.min.css'
		}))
		.pipe(app.plugins.sourcemaps.write('.'))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}