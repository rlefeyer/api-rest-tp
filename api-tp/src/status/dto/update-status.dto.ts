import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStatusDto } from './create-status.dto';
import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class UpdateStatusDto extends PartialType(CreateStatusDto) {
    @ApiProperty({ required: true })
    @Field()
    name: string;
}
