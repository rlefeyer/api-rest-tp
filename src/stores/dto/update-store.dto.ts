import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UpdateArticleDto } from 'src/articles/dto/update-article.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @ApiProperty({ required: true, description: "Store name"})
    name: string;
    @ApiProperty({ required: true, description: "Store city"})
    city: string;
    @ApiProperty({ required: true, description: "City name"})
    area: string;
    @ApiProperty({ required: true, description: "City address"})
    address: string;
    @ApiPropertyOptional({ description: "SIREN Number (optional)" })
    siren: string;
}