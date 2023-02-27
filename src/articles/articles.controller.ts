import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {ApiBearerAuth, ApiResponse} from '@nestjs/swagger';
import { Article } from './entities/article.entity'
import { Throttle } from '@nestjs/throttler';
import {AuthGuard} from "@nestjs/passport";

@ApiBearerAuth()
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Throttle(10, 60)
  @Post()
  @ApiResponse({
    status: 400,
    description: 'page introuvable',
  })
  @ApiResponse({
    status: 401,
    description: 'utilisateur non authentifié',
  })
  @ApiResponse({
    status: 403,
    description: 'accès refusé',
  })
  @ApiResponse({
    status: 404,
    description: 'ressource non trouvée',
  })
  create(@Body() CreateArticleDto: CreateArticleDto) {
    const entity = this.convertDtoToEntity(CreateArticleDto);
    return this.articlesService.create(entity);
  }

  @Get()
  @ApiResponse({
    status: 400,
    description: 'page introuvable',
  })
  @ApiResponse({
    status: 401,
    description: 'utilisateur non authentifié',
  })
  @ApiResponse({
    status: 403,
    description: 'accès refusé',
  })
  @ApiResponse({
    status: 404,
    description: 'ressource non trouvée',
  })
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
