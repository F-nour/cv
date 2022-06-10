import { CLASSNAME } from '../modules/constants.js';
import { eventCollaps } from '../modules/collaps.js';
import { eventPopup } from '../modules/popup.js';

export default function initSkills() {
	const openPopups = document.getElementsByClassName(CLASSNAME.OPENPOPUP);
	eventPopup(openPopups);

	const title = document.getElementsByClassName(CLASSNAME.COLLAPSTITLE);
	eventCollaps(title);
}
