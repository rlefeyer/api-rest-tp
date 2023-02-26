import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDtoV2 {
  @ApiProperty({ required: true, description: 'Le nom de votre boutique' })
  nom: string;

  @ApiProperty({ required: true, description: 'La superficie en m2' })
  superficie: number;

  @ApiProperty({
    required: true,
    description: 'La ville où est située la boutique',
  })
  ville: string;
  @ApiProperty({
    required: true,
    description: 'Employé: ',
  })
  employe: string;
}
