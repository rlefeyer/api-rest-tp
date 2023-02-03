import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStore2Dto } from './dto/create-store2.dto';
import { UpdateStore2Dto } from './dto/update-store2.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Store } from 'src/stores/entities/store.entity';

@Controller('v2stores')
export class StoresController2 {
  constructor(private readonly storesService: StoresService) {}

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
  create(@Body() CreateStore2Dto: CreateStore2Dto) {
    const entity = this.convertDtoToEntity(CreateStore2Dto);
    return this.storesService.create(entity);
  }

  @Get()
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateStore2Dto: UpdateStore2Dto) {
    return this.storesService.update(id, UpdateStore2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }

  private convertDtoToEntity(dto: CreateStore2Dto): Store {
    const store = new Store();
    store.name = dto.name;
    store.area = dto.area;
    store.city = dto.city;
    store.employees = dto.employees;
    return store;
  }
}