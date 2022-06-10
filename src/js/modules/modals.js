import { CLASSNAME, STYLES, ID } from './constants.js';
import { size, clickEvent, createElement, keyEvent } from './utilities.js';

('use strict');

// modal

export const createShadow = (parentElement, action) => {
	const container = parentElement;
	const shadow = createElement('div', container, CLASSNAME.SHADOW, ID.SHADOW);
	shadow.addEventListener('click', action);
	size(shadow, '100vw', '100vh');
	return shadow;
};

export const scrollable = (element, overflow) => {
	element.style.overflow = overflow;
};

export const closeBtn = (parentElement, className, width, id, action) => {
	const closeBtn = createElement('button', parentElement, className, id);
	closeBtn.tabIndex = 0;
	closeBtn.style.width = width;
	closeBtn.innerHTML = `<span class="sr-only">Fermer</span>`;
	parentElement.prepend(closeBtn);
	clickEvent(closeBtn, action);
	keyEvent(closeBtn, action);
	return closeBtn;
};

export const closeModal = (shadow, closeBtn, ) => {

}
export const modalFocus = (parentEl, firstEl) => {
	scrollable(document.body, STYLES.HIDDEN);
	const endMenu = document.createElement('div');
	endMenu.tabIndex = 0;
	parentEl.append(endMenu);
	endMenu.addEventListener('focus', () => {
		endMenu.blur();
		firstEl.focus();
	});
	return endMenu;
};

// modal events

export const closeItem = (action) => {
	addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			action();
		}
	});
};
