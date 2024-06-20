
const headerBody = document.getElementById("header-body");
const itemLinks = document.getElementsByClassName("menu__item-link");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const body = document.body;

export function addClassActive() {
	burger.classList.add("active");
	menu.classList.add("active");
	menu.classList.add("animate");
}
export function removeClassActive() {
	burger.classList.remove("active");
	menu.classList.remove("active");
	menu.classList.remove("animate");
}


export function handlerCloseMenu({ target }) {
	const menuIsActive = menu.classList.contains('active');
	if (!menuIsActive) {
		return;
	}
	let isItemLink = false;

	for (let i = 0; i < itemLinks.length; i++) {
		isItemLink = itemLinks[i].contains(target);
		if (isItemLink) {
			break;
		}
	}

	if (menuIsActive && (!headerBody.contains(target) || isItemLink)) {
		removeClassActive();
	}
}