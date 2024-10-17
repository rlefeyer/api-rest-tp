import {Restaurant} from "../../restaurants/entities/restaurant.entity";

export class Menu {
    id: string;
    name: string;
    description: string;
    prix: number;
    restaurant: Restaurant;
}
