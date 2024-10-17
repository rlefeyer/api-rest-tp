import { Menu } from 'src/menus/entities/menu.entity';
import { User } from 'src/users/entities/user.entity';

export class Order {
  id: number;
  menus: Menu[];
  totalPrice: number;
  user: User;
}
