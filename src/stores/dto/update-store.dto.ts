import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { ApiProperty } from '@nestjs/swagger';
import { UpdateArticleDto } from 'src/articles/dto/update-article.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @ApiProperty({ required: true, description: "Nom du store" })
    name: string;

    @ApiProperty({ required: true, description: "Adresse du store" })
    adress: string;

    @ApiProperty({ required: true, description: "Numéro de siren du store" })
    siren: string;

    @ApiProperty({ required: true, description: "Surperficie du store" })
    superficie: string;

    // @ApiProperty({ required: false, description: "Liste d'articles du store" })
    // articles: UpdateArticleDto[];
}
