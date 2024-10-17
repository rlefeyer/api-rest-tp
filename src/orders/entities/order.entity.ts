import {Menu} from "../../menus/entities/menu.entity";
import {User} from "../../user/entities/user.entity";

export class Order {
    id: string;
    order: Menu[];
    prix: number;
    User: User;
}
