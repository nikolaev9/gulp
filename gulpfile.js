import gulp from 'gulp'
import { path } from './src/gulp/config.js'
import { plugins } from './src/gulp/plugins.js'

global.app = {
	path,
	gulp,
	plugins
}

// Импорт задач
import { html } from './src/gulp/tasks/html.js'
import { server } from './src/gulp/tasks/server.js'
import { scss } from './src/gulp/tasks/scss.js'
import { js } from './src/gulp/tasks/js.js'
import { images } from './src/gulp/tasks/images.js'
import { sprite } from './src/gulp/tasks/sprite.js'

// Слежение за файлами
function watcher() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.sprite, sprite);
}

const mainTasks = gulp.parallel(html, scss, js, images, sprite)
// Построение сценариев выполнения задач
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server))

// Выполнение сценария по умолчанию
gulp.task('default', dev)