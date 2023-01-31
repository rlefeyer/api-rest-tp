import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @ApiProperty({ required: true, description: 'name' })
    name: string;

    @ApiProperty({ required: true, description: 'description' })
    description: string;
}
