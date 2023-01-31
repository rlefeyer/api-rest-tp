import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateStoreDto {
  @ApiProperty({ required: true, description: 'Le nom du store' })
  name: string;

  @ApiProperty({ required: true, description: 'Superficie en m2' })
  area: number;

  @ApiProperty({ required: true, description: 'La ville du store' })
  city: string;

  @ApiProperty({ required: false })
  siren: string;
}
