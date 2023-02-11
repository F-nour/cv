import {Basics} from "./basics.model";
import {Work} from "./work.model";
import {Volunteer} from "./volunteer.model";
import {Education} from "./education.model";
import {Skill} from "./skill.model";
import {Language} from "./langage.model";
import {Interest} from "./interest.model";

export interface Resume {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
}