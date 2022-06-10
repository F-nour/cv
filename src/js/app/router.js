import { ID } from '../modules/constants.js';
import { actualLinkMenu } from '../modules/menus.js';
import { initDOM } from './compiler.js';

('use strict');

export default function Router(routes) {
	try {
		if (!routes) {
			throw 'error: routes param is mandatory';
		}
		this.constructor(routes);
		this.init();
	} catch (e) {
		console.error(e);
	}
}

Router.prototype = {
	routes: undefined,
	rootElem: undefined,
	constructor: function (routes) {
		this.routes = routes;
		this.rootElem = document.getElementById('main');
	},
	init: function () {
		const r = this.routes;
		(function (scope, r) {
			window.addEventListener('hashchange', function (e) {
				scope.hasChanged(scope, r);
			});
		})(this, r);
		this.hasChanged(this, r);
	},
	hasChanged: function (scope, r) {
		if (window.location.hash.length > 0) {
			for (let i = 0, length = r.length; i < length; i++) {
				const route = r[i];
				if (route.isActiveRoute(window.location.hash.substr(1))) {
					scope.goToRoute(route.htmlName);
				}
			}
		} else {
			for (let i = 0, length = r.length; i < length; i++) {
				const route = r[i];
				if (route.default) {
					scope.goToRoute(route.htmlName);
				}
			}
		}
	},

	goToRoute: function (htmlName) {
		(function (scope) {
			const url = 'views/' + htmlName,
				xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState === 4 && this.status === 200) {
					document.body.scrollTop = 0;
					scope.rootElem.innerHTML = this.responseText;
					initDOM(htmlName);
				}
			};
			xhttp.open('GET', url, true);
			xhttp.send();
		})(this);
		actualLinkMenu();
	},
};
