export const SCREENWIDTH = {
	EXTRALARGE: 1440,
	LARGE: 1024,
	MEDIUM: 800,
	SMALL: 600,
	EXTRASMALL: 414,
};

export const CLASSNAME = {
	ACTIVE: 'active',
	ACTUAL: 'actual',
	CLOSE: 'close',
	CLOSEICON: 'close-icon',
	COLLAPSTITLE: 'collaps__title',
	SUBTITLE: 'collaps__contentTitle',
	HAMBERGERMENU: 'hamberger-menu',
	HEADER: 'header',
	MAIN: 'main',
	OPEN: 'open',
	OPENPOPUP: 'openPopup',
	OPENED: 'opened',
	SHADOW: 'shadow',
	SRONLY: 'sr-only',
};

export const STYLES = {
	AUTO: 'auto',
	HIDDEN: 'hidden',
	VISIBLE: 'visible',
	NONE: 'none',
	FLEX: 'flex',
	SCROLLABLE: 'scrollable',
};

export const ID = {
	CLOSEMENU: 'closeMenu',
	CONTAINER: 'container',
	FOOTER: 'footer',
	HAMBERGERMENU: 'hambergerMenu',
	HEADER: 'header',
	MAIN: 'main',
	ROOT: 'container',
	SHADOW: 'shadow',
};

export const DATA = {
	MENUS: 'data-menus',
};

export const ELEMENT = {
	CONTAINER: document.getElementById(ID.CONTAINER),
	FOOTER: document.getElementById(ID.FOOTER),
	HEADER: document.getElementById(ID.HEADER),
	HAMBERGERMENU: document.getElementById(ID.HAMBERGERMENU),
	MAIN: document.getElementById(ID.MAIN),
	MENU: document.getElementById(ID.MENU),
	MENULINK: document.getElementById(ID.MENULINK),
	MENULIST: document.getElementById(ID.MENULIST),
	ROOT: document.body,
	SHADOW: document.querySelector(`#${ID.SHADOW}`),
};
