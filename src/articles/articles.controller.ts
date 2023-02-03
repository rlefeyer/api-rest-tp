import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Création effectué',
  })
  @ApiResponse({
    status: 400,
    description: 'Erreur 400',
  })
  create(@Body() createArticleDto: CreateArticleDto) {
    const entity = this.convertDtoToEntity(createArticleDto);
    return this.articlesService.create(entity);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }

  private convertDtoToEntity(dto: CreateArticleDto): Article {
    const article = new Article();
    article.name = dto.name;
    article.quantity = dto.quantity;
    article.price = dto.price;
    article.storeId = dto.storeId;
    return article;
  }
}
