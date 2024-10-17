import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsInt()
  @ApiProperty({ description: 'The unique identifier of the user', example: 1 })
  id?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The address of the user', example: '123 Main St' })
  address?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'The telephone number of the user', example: '+1234567890' })
  telephone?: string;
}
