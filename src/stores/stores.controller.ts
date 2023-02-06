import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Store } from './entities/store.entity';
import { CreateStoreDto2 } from './dto/create-store.dto2';

@ApiTags('Stores')
@Controller()
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

   convertDtoToEntityCreate(obj?: CreateStoreDto, obj2?: CreateStoreDto2): Store{
    let store = new Store()

    let createStoreDto = obj || obj2;

    store.name = createStoreDto.name;
    store.superficie = createStoreDto.superficie;
    store.adress = createStoreDto.adress;
    obj.siren ? store.siren = obj.siren : store.employe = obj2.employe;
    
    return store;
  }

  convertDtoToEntityCreate2(obj: CreateStoreDto2): Store{
    let store = new Store()
    store.name = obj.name;
    store.superficie = obj.superficie;
    store.adress = obj.adress;
    store.employe = obj.employe;
    return store;
  }

  convertDtoToEntityUpdate(obj: UpdateStoreDto): Store{
    let store = new Store()
    store.name = obj.name;
    store.superficie = obj.superficie;
    store.adress = obj.adress;
    store.siren = obj.siren;
    return store;
  }

  @Post('V1/stores')
  @ApiCreatedResponse({ description: "L'enregistrement a été créé avec succès."})
  @ApiForbiddenResponse({ description: "Forbidden."})
  create(@Body() createStoreDto: CreateStoreDto) {
    
    return this.storesService.create(this.convertDtoToEntityCreate(createStoreDto));
  }

  @Post('V2/stores')
  @ApiCreatedResponse({ description: "L'enregistrement a été créé avec succès."})
  @ApiForbiddenResponse({ description: "Forbidden."})
  createv2(@Body() createStoreDto: CreateStoreDto2) {
    
    return this.storesService.createv2(this.convertDtoToEntityCreate(null, createStoreDto));
  }

  @Get('/stores')
  @ApiResponse({ status: 200, description: 'La liste des stores est bien retournés'})
  @ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."})
  findAll() {
    return this.storesService.findAll();
  }

  @Get('/stores/stores:id/articles')
  @ApiResponse({ status: 200, description: 'La liste des articles du store est bien retournés'})
  @ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée."})
  findAllArticles(@Param('id') id: string) {
    return this.storesService.findAllArticles(id);
  }

  @Get('/stores/:id')
  @ApiResponse({ status: 200, description: 'Le store à bien été retourné'})
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch('/stores/:id')
  @ApiResponse({ status: 200, description: 'Le store à été modifié partiellement'})
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, this.convertDtoToEntityUpdate(updateStoreDto));
  }

  @Delete('/stores/:id')
  @ApiResponse({ status: 200, description: 'Le store à été supprimé'})
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
