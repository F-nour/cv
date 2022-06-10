import { SCREENWIDTH } from './constants.js';

('use strict');

// style change

export const size = (element, width = '', height = '', padding = '') => {
	element.style.width = width;
	element.style.height = height;
	element.style.padding = padding;
};

export const visible = (element, visibility) => {
	element.style.visibility = visibility;
};

export const display = (element, display) => {
	element.style.display = display;
};

export const clickEvent = (element, action) => {
	element.addEventListener('click', action);
};

export const keyEvent = (element, action) => {
	element.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			action();
		}
	});
};

export const removeElement = (element) => {
	if (element) {
		element.parentNode.removeChild(element);
	}
};

export const laptops = (action) => {
	const laptops = window.matchMedia(`${SCREENWIDTH.LARGE}px`);
	laptops.addEventListener('change', action);
	return laptops;
};

export const createElement = (tagName, parentElement, className, id) => {
	const element = document.createElement(tagName);
	element.classList.add(className);
	element.id = id;
	parentElement.prepend(element);
	return element;
};

export const toggleClass = (element, className) => {
	element.classList.toggle(className);
};

export const addClass = (element, className) => {
	element.classList.add(className);
};

export const removeClass = (element, className) => {
	element.classList.remove(className);
}; 