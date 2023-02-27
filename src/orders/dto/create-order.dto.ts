import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {

    @ApiProperty({ required: true, description: "Nom de la commande" })
    number: string;

}