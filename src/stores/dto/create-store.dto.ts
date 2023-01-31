import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from 'src/articles/dto/create-article.dto';

export class CreateStoreDto {
    
    @ApiProperty({ required: true, description: "Nom du store" })
    name: string;

    @ApiProperty({ required: true, description: "Adresse du store" })
    adress: string;

    @ApiProperty({ required: true, description: "Numéro de siret du store" })
    siret: string;

    @ApiProperty({ required: true, description: "Surperficie du store" })
    superficie: string;

    // @ApiProperty({ required: false, description: "Liste d'articles du store" })
    // articles: CreateArticleDto[];
}
