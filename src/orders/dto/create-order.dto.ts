import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({ required: true, description: "Order name"})
    name: string;
}