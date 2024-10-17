import { IsString, IsInt, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRestaurantDto {
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional({ description: 'The unique identifier of the restaurant', example: 1 })
  id?: number;

  @IsString()
  @ApiProperty({ description: 'The name of the restaurant', example: 'Le Gourmet' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'The description of the restaurant', example: 'A fine dining restaurant' })
  description?: string;

  @IsString()
  @ApiProperty({ description: 'The address of the restaurant', example: '456 Culinary Blvd' })
  address: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ description: 'The rating of the restaurant', example: 4.5 })
  rating?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: 'The opening hours of the restaurant', example: 'Mon-Fri 9am-9pm' })
  hours?: string;
}