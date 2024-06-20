import * as flsGuru from "./modules/functions.js";
import { addClassActive, handlerCloseMenu, removeClassActive } from "./modules/burger.js";
import { headerScrollAnimation } from "./modules/headerScrollAnimation.js";
import { readMore, resizeReadMore } from "./modules/readMore.js";

"use strict";

window.onload = function () {
	flsGuru.isWebp();
	headerScrollAnimation();

	const burger = document.getElementById("burger");


	burger.onclick = () => {
		if (burger.classList.contains('active')) {
			removeClassActive();
		} else {
			addClassActive();
		}
	}



	readMore();

	window.addEventListener('resize', (e) => {
		resizeReadMore(e.currentTarget.innerWidth);
	});

}




