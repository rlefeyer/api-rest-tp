import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {

    @ApiProperty({ required: true, description: "Nom de l'article" })
    name: string;

    @ApiProperty({ required: true, description: "La quantité de l'article" })
    quantity: number;

    @ApiProperty({ required: true, description: "Le prix de l'article" })
    price: number;

    @ApiProperty({ required: false, description: "article" })
    storeId: string;
}