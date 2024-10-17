import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import { IsString, IsInt, IsNumber, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ description: 'The unique identifier of the menu', example: 1 })
  id?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'The name of the menu', example: 'Lunch Menu' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'The description of the menu', example: 'A selection of lunch items' })
  description?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'The price of the menu', example: 19.99 })
  price?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ description: 'The ID of the restaurant associated with the menu', example: 1 })
  restaurantId?: number;
}