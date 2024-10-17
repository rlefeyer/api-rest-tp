import { ApiProperty } from '@nestjs/swagger';

export class Menu {
  @ApiProperty({ description: 'The unique identifier of the menu', example: 1 })
  id: number;

  @ApiProperty({ description: 'The name of the menu', example: 'Lunch Menu' })
  name: string;

  @ApiProperty({ description: 'The description of the menu', example: 'A selection of lunch items' })
  description?: string;

  @ApiProperty({ description: 'The price of the menu', example: 19.99 })
  price: number;

  @ApiProperty({ description: 'The ID of the restaurant associated with the menu', example: 1 })
  restaurantId: number;

  constructor(id: number, name: string, price: number, restaurantId: number, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.restaurantId = restaurantId;
    this.description = description;
  }
}