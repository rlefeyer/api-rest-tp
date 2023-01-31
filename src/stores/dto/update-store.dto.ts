import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @ApiProperty({ required: true, description: 'Le nom du store' })
  name: string;

  @ApiProperty({ required: true, description: 'Superficie en m2' })
  area: number;

  @ApiProperty({ required: true, description: 'La ville du store' })
  city: string;

  @ApiProperty({ required: false })
  siren: string;
}
