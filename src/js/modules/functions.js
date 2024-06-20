// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
	// Проверка поддержки webp
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 3);
		}
		webP.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoDAAMAAQAcJaQAA3AA/v4G0AA=";
	}

	// Добавление класса _webp или _no-webp для HTML
	testWebp(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.body.classList.add(className);
	})
}