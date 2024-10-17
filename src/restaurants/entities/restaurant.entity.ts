import {Menu} from "../../menus/entities/menu.entity";

export class Restaurant {
    id: string;
    name: string;
    description: string;
    adresse: string
    menu: Menu[];
    note: number;
    horaires: string;
}
