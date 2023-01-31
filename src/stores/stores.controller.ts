import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import {ApiResponse} from "@nestjs/swagger";

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: '200',
  })
  @ApiResponse({
    status: 401,
    description: 'Error: Bad Request',
  })
  @ApiResponse({
    status: 403,
    description: 'Error: Bad Request',
  })
  @ApiResponse({
    status: 400,
    description: 'Error: Bad Request',
  })
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
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
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}