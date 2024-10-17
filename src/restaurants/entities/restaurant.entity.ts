import { Menu } from 'src/menus/entities/menu.entity';

export class Restaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  menus: Menu[];
  rating: number;
  hours: string;
}
