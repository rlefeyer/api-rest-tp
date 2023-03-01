import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateOrderDto {
    @ApiProperty({ required: true})
    name: string;
}
