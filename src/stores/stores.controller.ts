import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Store } from './entities/store.entity';

@Controller('v1/stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Création du magasin',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  create(@Body() createStoreDto: CreateStoreDto) {
    const entity = this.convertDtoToEntity(createStoreDto);
    return this.storesService.create(entity);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Tous les magasins',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Voici le magasin demandé',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Modification du magasin',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Suppresion du magasin',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }

  private convertDtoToEntity(dto: CreateStoreDto): Store {
    const store = new Store();
    store.name = dto.name;
    store.area = dto.area;
    store.city = dto.city;
    store.siren = dto.siren;
    return store;
  }
}
