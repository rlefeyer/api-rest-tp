import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {

    @ApiProperty({ required: true, description: "Nom de la commande" })
    name: string;

    @ApiProperty({ required: true, description: "La date de la commande" })
    date: Date;

    @ApiProperty({ required: true, description: "Le prix de la commande"})
    price: number;

    @ApiProperty({ required: false, description: "article" })
    storeId: string;
}