import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @ApiProperty({ required: true })
    name: string;

    @ApiProperty({ required: true })
    prix: number;

    @ApiProperty({ required: true })
    description: string;

    @ApiProperty({ required: false })
    storeId: string;
}
