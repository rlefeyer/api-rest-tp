import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {  
    @ApiProperty({ required: true, description: "nom de l'article" })
    name: string;
  
    @ApiProperty({ required: true, description: "quantité d'articles" })
    quantity: number;
  
    @ApiProperty({ required: true, description: "prix de l'article" })
    price: number;

    @ApiProperty({ required: true, description: "relation avec un magasin" })
    storeId: string;
    
}
