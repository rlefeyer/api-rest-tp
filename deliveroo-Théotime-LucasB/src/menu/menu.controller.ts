import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new menu' })
  @ApiResponse({ status: 201, description: 'The menu has been successfully created.', type: Menu })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all menus' })
  @ApiResponse({ status: 200, description: 'Return all menus.', type: [Menu] })
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a menu by ID' })
  @ApiResponse({ status: 200, description: 'Return the menu with the given ID.', type: Menu })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a menu by ID' })
  @ApiResponse({ status: 200, description: 'The menu has been successfully updated.', type: Menu })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a menu by ID' })
  @ApiResponse({ status: 200, description: 'The menu has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Menu not found.' })
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
