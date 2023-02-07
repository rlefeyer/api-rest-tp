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
    description: 'Création de l\'article',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  create(@Body() createArticleDto: CreateArticleDto) {
    const entity = this.convertDtoToEntity(createArticleDto);
    return this.articlesService.create(entity);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Voici tous les articles',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findAll() {
    return this.articlesService.findAll();
  }

  
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Voici l\'article demandé',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Article modifié',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'suppression de l\'article demandé',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
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
