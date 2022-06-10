import {
	SCREENWIDTH,
	CLASSNAME,
	STYLES,
	ID,
	DATA,
	ELEMENT,
} from './constants.js';
import {
	size,
	visible,
	clickEvent,
	keyEvent,
	removeElement,
} from './utilities.js';
import {
	scrollable,
	closeBtn,
	modalFocus,
	createShadow,
} from './modals.js';

('use strict');

const header = ELEMENT.HEADER;

const headerWidth = '250px';

export function responsive() {
	screenResize();
	actualLinkMenu();
	if (window.innerWidth <= SCREENWIDTH.LARGE) {
		menuIcon();
	} else {
		removeElement(document.getElementById(ID.HAMBERGERMENU));
		removeElement(document.getElementById(ID.CLOSEMENU));
	}
}

export const screenResize = () => {
	if (window.innerWidth <= SCREENWIDTH.LARGE) {
		visible(header, STYLES.HIDDEN);
		size(header, '0px');
	} else {
		visible(header, STYLES.VISIBLE);
		size(header, `100vw`);
	}
};

const menuIcon = () => {
	const hambergerMenu = document.createElement('button');
	hambergerMenu.id = ID.HAMBERGERMENU;
	hambergerMenu.classList.add(CLASSNAME.HAMBERGERMENU);
	hambergerMenu.tabIndex = 0;
	hambergerMenu.innerHTML = `<span class="${CLASSNAME.SRONLY}">Ouvrir le menu</span>`;
	document.body.prepend(hambergerMenu);
	clickEvent(hambergerMenu, openMenu);
	keyEvent(hambergerMenu, openMenu);
	return hambergerMenu;
};

const closeMenuIcon = () => {
	const closeMenuIcon = closeBtn(
		header,
		`${CLASSNAME.CLOSEICON}`,
		`${headerWidth}`,
		ID.CLOSEMENU,
		closeMenu
	);
	return closeMenuIcon;
};

const openMenu = () => {
	size(header, headerWidth);
	visible(header, STYLES.VISIBLE);
	closeMenuIcon();
	headerOnFocus();
	createShadow(ELEMENT.CONTAINER, closeMenu);
};

const closeMenu = () => {
	const shadow = document.querySelector(`#${ID.SHADOW}`);
	const closeBtn = document.getElementById(ID.CLOSEMENU);
	header.classList.remove(CLASSNAME.ACTIVE);
	size(header, '0px');
	removeElement(shadow);
	removeElement(closeBtn);
	scrollable(document.body, STYLES.AUTO);
};

export const actualLinkMenu = () => {
	const menus = document.querySelectorAll(`[${DATA.MENUS}]`);
	for (let i = 0; i < menus.length; i += 1) {
		const menu = menus[i];
		const link = menu.querySelector('a');
		menu.classList.remove(CLASSNAME.ACTUAL);
		if (link.href === window.location.href) {
			menu.classList.add(CLASSNAME.ACTUAL);
			closeMenuEvent();
		}
	}
	indexActual(menus);
};

export const closeMenuEvent = () => {
	if (window.innerWidth <= SCREENWIDTH.LARGE) {
		closeMenu();
	}
};

const indexActual = (menus) => {
	const hasClass = Array.from(menus).some((menu) => {
		if (menu.classList.contains(CLASSNAME.ACTUAL)) {
			return true;
		}
		return false;
	});
	if (!hasClass) {
		menus[0].classList.add(CLASSNAME.ACTUAL);
	}
};

const headerOnFocus = () => {
	const closeIcon = document.getElementById(ID.CLOSEMENU);
	modalFocus(header, closeIcon);
};
