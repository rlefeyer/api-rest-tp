import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

export class Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurant: Restaurant;
}
