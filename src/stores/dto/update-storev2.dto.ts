import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDtoV2 } from './create-storev2.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoreDtoV2 extends PartialType(CreateStoreDtoV2) {
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
    required: false,
    description: 'le numéro de SIREN de votre boutique (facultatif)',
  })
  employe: string;
}
