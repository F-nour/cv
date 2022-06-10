import { CLASSNAME } from './constants.js';
import { clickEvent, createElement, size, visible } from './utilities.js';

('use strict');

const title = document.getElementsByClassName(CLASSNAME.COLLAPSTITLE);

const openCollaps = (el) => {
	const height = el.scrollHeight;
	size(el, '', `${height}px`, '');
	visible(el, 'visible');
};

export const closeCollaps = (element) => {
	for (let i = 0; i < title.length; i++) {
		const parentDiv = title[i].firstElementChild;
		const list = title[i];
		const childDiv = parentDiv.nextElementSibling;
		childDiv.removeAttribute('style');
		list.classList.remove(CLASSNAME.ACTIVE);
		parentDiv.classList.remove(CLASSNAME.ACTIVE);
	}
};

const linkCollaps = (element) => {
	const parentDIv = element.parentElement;
	const childDiv = element.nextElementSibling;
	const height = childDiv.offsetHeight;
	if (height != '') {
		childDiv.removeAttribute('style');
		parentDIv.classList.remove(CLASSNAME.ACTIVE);
	} else {
		closeCollaps();
		openCollaps(childDiv);
		parentDIv.classList.add(CLASSNAME.ACTIVE);
	}
};

const handleCollaps = (e) => {
	if (e.target.tagName === 'BUTTON') {
		const parentDiv = e.target;
		e.preventDefault();
		linkCollaps(parentDiv);
	} else if (e.target.tagName === 'DIV') {
		const parentDiv = e.target.parentElement;
		linkCollaps(parentDiv);
	}
};

export const eventCollaps = (element) => {
	for (let i = 0; i < element.length; i++) {
		const parent = element[i].firstElementChild;
		createElement('div', parent, CLASSNAME.OPEN);
		clickEvent(parent, handleCollaps);
	}
};
