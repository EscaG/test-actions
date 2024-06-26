import replace from "gulp-replace"; //Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновлений (фактических изменений файлов)
import gulpIf from "gulp-if";

export const plugins = {
	replace,
	plumber,
	notify,
	browserSync,
	newer,
	gulpIf,
};
