import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
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
		.pipe(sass({
			outputStyle: 'compressed'
		}, false))
		.pipe(groupCssMedia())
		.pipe(cleanCss())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}