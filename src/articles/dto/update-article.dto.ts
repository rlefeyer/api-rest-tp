import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @ApiProperty({ required: true, description: 'Le nom de l\'article',})
    nom: string;

    @ApiProperty({ required: true, description: 'La quantité en stock de l\'article',})
    quantite: number;

    @ApiProperty({ required: true, description: 'Le prix de l\'article', })
    prix: number;
}
