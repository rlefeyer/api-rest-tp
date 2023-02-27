import { ApiProperty } from "@nestjs/swagger";
import { Article } from "@prisma/client";
import { CreateArticleDto } from "src/articles/dto/create-article.dto";

export class CreateOrderDto {
    @ApiProperty({ required: true, description: "Nom de la commande" })
    name: string;
}
