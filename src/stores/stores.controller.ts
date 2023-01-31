import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Here is the list of all of the found records'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id/articles')
  findAllStoreArticles(@Param('id') id: string) {
    return this.storesService.findAllStoreArticles(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
