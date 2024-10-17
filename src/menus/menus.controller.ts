import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {ApiTags} from "@nestjs/swagger";
import {ApiResponse} from "@nestjs/swagger";
import {Menu} from "./entities/menu.entity";

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Get()
    @ApiResponse({status: 200, description: 'The records has been successfully returned.', type: [Menu]})
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully returned.', type: Menu})
  findOne(@Param('id') id: string) {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully updated.', type: Menu})
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(+id, updateMenuDto);
  }

  @Delete(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully deleted.'})
    @ApiResponse({status: 403, description: 'Forbidden.'})
    @ApiResponse({status: 404, description: 'Not Found.'})
  remove(@Param('id') id: string) {
    return this.menusService.remove(+id);
  }
}
