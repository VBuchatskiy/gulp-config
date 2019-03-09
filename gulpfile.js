const { src, dest, watch } = require('gulp');
/* utility */
const path = require('path');
const del = require('del');
const cache = require('gulp-cache');
/* utility */
/* css */
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
/* css */
/*html*/
const injecthtml = require('gulp-inject-partials');
/*html*/
/* images */
const imagemin = require('gulp-imagemin');
/* images */

const paths = {
	entry: {
		html: path.resolve(__dirname, 'dev', 'index.html'),
		css: path.resolve(__dirname, 'dev', '*.scss'),
		images: path.resolve(__dirname, 'dev', '*.jpg')
	},
	output: {
		html: path.resolve(__dirname, 'dist'),
		css: path.resolve(__dirname, 'dist', 'style'),
		images: path.resolve(__dirname, 'dist', 'images')
	},
	watch: {
		html: path.resolve(__dirname, 'dev', '**', '*.scss').replace(/\\/g, '/'),
		css: path.resolve(__dirname, 'dev', '**', '*.scss').replace(/\\/g, '/'),
	}
};

const _css = () => {
	return src(paths.entry.css)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ browsers: ['last 2 version'], cascade: false }))
		.pipe(cleancss({ level: 2 }))
		.pipe(dest(paths.output.css));
};

const _html = () => {
	return src(paths.entry.html)
		.pipe(injecthtml())
		.pipe(dest(paths.output.html));
}

const _images = () => {
	return src(paths.entry.images)
		.pipe(cache(imagemin({ interlaced: true })))
		.pipe(dest(paths.output.images));
}

const _clean = () => {
	return del([path.resolve(__dirname, 'dist')]);
};

watch(paths.watch.css, { delay: 500 }, _css);

exports.html = _html;
exports.css = _css;
exports.iamges = _images;
exports.clean = _clean;