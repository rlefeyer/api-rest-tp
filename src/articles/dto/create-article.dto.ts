import { ApiProperty } from '@nestjs/swagger';
import { Entity } from 'typeorm';

@Entity()
export class CreateArticleDto {
    @ApiProperty({ required: true, description: "Le nom de l'article" })
    name: string;

    @ApiProperty({ required: true, description: "Description de l'article" })
    description: string;
}
