import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';
import {ApiBearerAuth, ApiResponse} from '@nestjs/swagger';
import {Article} from './entities/article.entity';
import {Throttle} from '@nestjs/throttler';
import {AuthGuard} from "@nestjs/passport";

@ApiBearerAuth()
@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Throttle(10, 60)
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
    @ApiResponse({
        status: 403,
        description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."
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
