import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
    @ApiProperty({ required: true })
    name: string;
}
