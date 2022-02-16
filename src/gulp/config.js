// PATHS
const build = '.';
const src = './src';

export const path = {
	build: {
		html: build + '/',
		css: build + '/css/',
		js: build + '/js/',
		images: build + '/img/',
		sprite: '../' + build + '/sprite.svg'
	},
	src: {
		html: src + '/*.html',
		scss: src + '/scss/main.scss',
		js: src + '/js/*.js',
		images: src + '/img/**/*.{jpg,jpeg,png,gif,webp,svg}',
		sprite: src + '/img/sprite/*.svg'
	},
	watch: {
		html: src + '/**/*.html',
		scss: src + '/scss/**/*.scss',
		images: src + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
		js: src + '/js/*.js',
		sprite: src + '/img/sprite/*.svg'
	}
};