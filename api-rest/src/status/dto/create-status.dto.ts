import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class CreateStatusDto {
  @ApiProperty({ required: true })
  name: string;
}
