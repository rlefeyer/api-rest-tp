import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiResponse } from '@nestjs/swagger';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ description: "L'enregistrement a été créé avec succès."})
  @ApiForbiddenResponse({ description: "Forbidden."})
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'La liste des articles est bien retournés'})
  @ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."})
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: "L'article à bien été retourné"})
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: "L'article à été modifié partiellement"})
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: "L'article à été supprimé"})
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
