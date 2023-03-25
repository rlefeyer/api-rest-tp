import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  price: number;
  @ApiProperty({ required: false })
  description: string;
  @ApiProperty({ required: false })
  storeId: string;
}
