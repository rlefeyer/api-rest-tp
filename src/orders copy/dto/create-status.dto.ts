import { ApiProperty } from "@nestjs/swagger";

export class CreateStatusDto {
    @ApiProperty({ required: true, description: "Status name"})
    name: string;
}