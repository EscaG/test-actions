import webp from "gulp-webp";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				webp())
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				app.gulp.dest(app.path.build.images))
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				app.gulp.src(app.path.src.images))
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				app.plugins.newer(app.path.build.images))
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3,
				}))
		)
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
