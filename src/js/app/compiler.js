import Router from './router.js';
import Route from './route.js';
import initHome from '../pages/home.js';
import initTrainings from '../pages/trainings.js';
import initExperiences from '../pages/experiences.js';
import initProjects from '../pages/project.js';
import initSkills from '../pages/skills.js';
import initLegal from '../pages/legal.js';

('use strict');

export function init() {
	const router = new Router([
		new Route('home', 'home.html', true),
		new Route('projects', 'projects.html'),
		new Route('skills', 'skills.html'),
		new Route('experiences', 'experiences.html'),
		new Route('trainings', 'trainings.html'),
		new Route('legal', 'legal.html'),
		new Route('build', 'build.html'),
	]);
}

export const initPages = (namePage) => {
	const root = document.getElementById(namePage);
	return root;
};

export const initDOM = (htmlName) => {
	switch (htmlName) {
		case 'home.html':
			initHome();
			break;
		case 'projects.html':
			initProjects();
			break;
		case 'skills.html':
			initSkills();
			break;
		case 'experiences.html':
			initExperiences();
			break;
		case 'trainings.html':
			initTrainings();
			break;
		case 'legal.html':
			initLegal();
			break;

		default:
			break;
	}
};
