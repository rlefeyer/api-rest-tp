import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({ required: true, description: "nom de l'article" })
    numero: string; 

  
    @ApiProperty({ required: true, description: "quantité d'articles" })
    quantity: number;
}