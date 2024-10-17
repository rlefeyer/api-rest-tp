import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';

export class Menu {
  @ApiProperty({ description: 'The unique identifier of the menu', example: 1 })
  id: number;

  @ApiProperty({ description: 'The name of the menu', example: 'Lunch Menu' })
  name: string;

  @ApiPropertyOptional({ description: 'The description of the menu', example: 'A selection of lunch items' })
  description?: string;

  @ApiProperty({ description: 'The price of the menu', example: 19.99 })
  price: number;

  @ApiProperty({ description: 'The restaurant associated with the menu' })
  restaurant: Restaurant;

  constructor(id: number, name: string, price: number, restaurant: Restaurant, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.restaurant = restaurant;
    this.description = description;
  }
}