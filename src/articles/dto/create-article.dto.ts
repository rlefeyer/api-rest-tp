import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty({ required: true, description: "Item name"})
    name: string;
    @ApiProperty({ required: true, description: "Itme price"})
    price: number;
    @ApiPropertyOptional({ description: "Item description" })
    description: string;
    @ApiProperty({ required: false, description: "Associated store" })
    storeId: string;
}