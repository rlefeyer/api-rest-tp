import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ description: 'The unique identifier of the user', example: 1 })
  id: number;

  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'The address of the user', example: '123 Main St' })
  address: string;

  @ApiProperty({ description: 'The telephone number of the user', example: '+1234567890' })
  telephone: string;

  constructor(id: number, name: string, address: string, telephone: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.telephone = telephone;
  }
}