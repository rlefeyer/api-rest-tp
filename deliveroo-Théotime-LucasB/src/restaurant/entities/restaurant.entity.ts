import { ApiProperty } from '@nestjs/swagger';

export class Restaurant {
  @ApiProperty({ description: 'The unique identifier of the restaurant', example: 1 })
  id: number;

  @ApiProperty({ description: 'The name of the restaurant', example: 'Le Gourmet' })
  name: string;

  @ApiProperty({ description: 'The description of the restaurant', example: 'A fine dining restaurant' })
  description?: string;

  @ApiProperty({ description: 'The address of the restaurant', example: '456 Culinary Blvd' })
  address: string;

  @ApiProperty({ description: 'The rating of the restaurant', example: 4.5 })
  rating?: number;

  @ApiProperty({ description: 'The opening hours of the restaurant', example: 'Mon-Fri 9am-9pm' })
  hours?: string;

  constructor(id: number, name: string, address: string, description?: string, rating?: number, hours?: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.description = description;
    this.rating = rating;
    this.hours = hours;
  }
}