import { ApiProperty } from '@nestjs/swagger';

export class CreateStatusDto {
    @ApiProperty({ required: true, description: "Nom du status" })
    name: string;
}
