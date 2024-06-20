import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import gulpWebpcss from "gulp-webpcss";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: "expanded"
		}))
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				groupCssMediaQueries())
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				gulpWebpcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				}))
		)
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				autoPrefixer({
					grid: true,
					overrideBrowserlist: ["last 3 versions"],
					cascade: true,
				}))
		)
		// Раскомментировать если нужен не сжатый дубль файла стилей
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(
			app.plugins.gulpIf(
				app.isProd,
				GulpCleanCss())
		)
		.pipe(rename({
			extname: ".min.css",
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
}