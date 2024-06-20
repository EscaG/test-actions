const aboutImg = document.getElementById("about-img");
const aboutContent = document.getElementById("about-content");
const btnReadMore = document.getElementById("read-more");
let isOpenReadMore = false;

export const readMore = () => {
	aboutContent.style.height = `${aboutImg.height - 50}px`;
	btnReadMore.addEventListener("click", () => {
		if (btnReadMore.classList.contains('active')) {
			btnReadMore.textContent = "Показать полностью";
			btnReadMore.classList.remove('active');
			isOpenReadMore = false;
			if (window.innerWidth > 900) {
				aboutContent.style.height = `${aboutImg.height - 50}px`;
			} else {
				aboutContent.style.height = "400px";
			}
		} else {
			btnReadMore.textContent = "Скрыть";
			btnReadMore.classList.add('active');
			aboutContent.style.height = "100%";
			aboutContent.style.maxHeight = "100%";
			isOpenReadMore = true;
		}
	}
	)
};

export const resizeReadMore = (width) => {
	if (width >= 900 && !isOpenReadMore) {
		aboutContent.style.height = `${aboutImg.height - 50}px`;
	} if (width < 900 && !isOpenReadMore) {
		aboutContent.style.height = "400px";
	}
};
