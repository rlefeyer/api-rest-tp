import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {
  @ApiProperty({
    example: 'Pizza Margherita',
    description: 'Le nom du plat au menu',
  })
  name: string;

  @ApiProperty({
    example: 'Une délicieuse pizza garnie de tomates fraîches et de mozzarella',
    description: 'Une brève description du plat au menu',
  })
  description: string;

  @ApiProperty({
    example: 15.99,
    description: 'Le prix du plat en euros',
  })
  price: number;

  @ApiProperty({
    example: 1,
    description: "L'ID du restaurant auquel appartient ce menu",
  })
  restaurantId: number;
}
