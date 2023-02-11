import {SubMenu} from "./submenu.model";

export interface Menu {
  name: string;
  path: string;
  directory: string;
  subMenu: SubMenu[];
}