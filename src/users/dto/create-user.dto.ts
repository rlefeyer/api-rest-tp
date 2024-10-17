import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: "Le nom complet de l'utilisateur",
  })
  name: string;

  @ApiProperty({
    example: '123 Rue de Paris, 75001 Paris',
    description: "L'adresse complète de l'utilisateur",
  })
  address: string;

  @ApiProperty({
    example: '+33123456789',
    description: "Le numéro de téléphone de l'utilisateur",
  })
  phone: string;
}
