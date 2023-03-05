import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ required: true, description: "Le nom de l'article" })
  nom: string;

  @ApiProperty({
    required: true,
    description: "La quantité en stock de l'article",
  })
  quantite: number;

  @ApiProperty({ required: true, description: "Le prix de l'article" })
  prix: number;

  @ApiProperty({ required: true, description: 'Lid de la boutique' })
  storeId: string;
}
