import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browsersync from 'browser-sync'
import newer from 'gulp-newer'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'

export const plugins = {
	plumber,
	notify,
	browsersync,
	newer,
	sourcemaps,
	rename
}