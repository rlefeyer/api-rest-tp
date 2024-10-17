import { ApiProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  @ApiProperty({
    example: 'Le Gourmet',
    description: 'Le nom du restaurant',
  })
  name: string;

  @ApiProperty({
    example: 'Un restaurant gastronomique au cœur de la ville',
    description: 'Une description du restaurant',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: '123 Rue de Paris, 75001 Paris',
    description: "L'adresse du restaurant",
  })
  address: string;

  @ApiProperty({
    example: 4.5,
    description: 'La note du restaurant sur une échelle de 1 à 5',
    required: false,
  })
  rating?: number;

  @ApiProperty({
    example: '10:00 - 22:00',
    description: "Les horaires d'ouverture du restaurant",
  })
  hours: string;
}
