'use strict';

import { init } from './app/compiler.js';
import { laptops } from './modules/utilities.js';
import { responsive, screenResize } from './modules/menus.js';

const main = () => {
	responsive();
};

init();

document.addEventListener('DOMContentLoaded', main);
addEventListener('resize', screenResize);
