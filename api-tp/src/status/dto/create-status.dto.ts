import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class CreateStatusDto {
    @ApiProperty({ required: true })
    @Field()
    name: string;
}
