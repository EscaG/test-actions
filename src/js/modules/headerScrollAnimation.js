export function headerScrollAnimation() {
	const header = document.getElementById("header-body");

	if (window.scrollY > 200 && !header.classList.contains("header-mini")) {
		header.classList.add("header-mini");
	}

	addEventListener('scroll', () => {
		if (window.scrollY > 200) {
			header.classList.add("header-mini");
		} else {
			header.classList.remove("header-mini");
		}
	});
}
