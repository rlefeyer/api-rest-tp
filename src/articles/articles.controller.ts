import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

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
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
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
}
