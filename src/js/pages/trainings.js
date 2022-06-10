import { CLASSNAME } from '../modules/constants.js';
import { eventCollaps } from '../modules/collaps.js';
export default function initSkills() {
	const title = document.getElementsByClassName(CLASSNAME.COLLAPSTITLE);
	eventCollaps(title);
}
