import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Article } from "src/articles/entities/article.entity";

export class CreateStoreDto {
    @ApiProperty({ required: true, description: "Store name"})
    name: string;
    @ApiProperty({ required: true, description: "Store city"})
    city: string;
    @ApiProperty({ required: true, description: "City name"})
    area: string;
    @ApiProperty({ required: true, description: "City address"})
    address: string;
    @ApiPropertyOptional({description: "SIREN Number (optional)"})
    siren: string;
    // @ApiProperty({ required: true, description: "Store articles"})
    // articles: Article[];
}