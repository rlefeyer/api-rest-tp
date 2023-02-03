import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Stores')
@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiCreatedResponse({ description: "L'enregistrement a été créé avec succès."})
  @ApiForbiddenResponse({ description: "Forbidden."})
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'La liste des stores est bien retournés'})
  @ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."})
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id/articles')
  @ApiResponse({ status: 200, description: 'La liste des articles du store est bien retournés'})
  @ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."})
  findAllArticles(@Param('id') id: string) {
    return this.storesService.findAllArticles(id);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Le store à bien été retourné'})
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Le store à été modifié partiellement'})
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Le store à été supprimé'})
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
