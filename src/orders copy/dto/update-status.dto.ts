import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusDto } from './create-status.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStatusDto extends PartialType(CreateStatusDto) {
    @ApiProperty({ required: true, description: "Order name"})
    name: string;
}