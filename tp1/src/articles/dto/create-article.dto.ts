import { ApiProperty } from "@nestjs/swagger";
import { Article } from "../entities/article.entity";
export class CreateArticleDto {
    @ApiProperty({ required: true})
    name: string;
    @ApiProperty({ required: true})
    price: number;
    @ApiProperty({ required: false})
    description: string;
    @ApiProperty({ required: false})
    storeId: string;
    
    ConvertToEntity(): Article {
        const article = new Article();
        article.name = this.name;
        article.description = this.description;
        article.price = this.price;
        article.storeId = this.storeId;
    
        return article;
      }
    
}
