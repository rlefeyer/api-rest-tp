import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Throttle } from '@nestjs/throttler';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Throttle(10, 60)
  @Post()
  @ApiCreatedResponse({ description: "Ajout d'un article avec succès." })
  @ApiForbiddenResponse({ description: 'Accès refusé.' })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiCreatedResponse({ description: 'Retour des articles avec succès.' })
  @ApiForbiddenResponse({ description: 'Accès refusé.' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ description: "Retour d'un article avec succès." })
  @ApiForbiddenResponse({ description: 'Accès refusé.' })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: "Modification partielle de l'article avec succès.",
  })
  @ApiForbiddenResponse({ description: 'Accès refusé.' })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: "Suppression d'un article avec succès." })
  @ApiForbiddenResponse({ description: 'Accès refusé.' })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
