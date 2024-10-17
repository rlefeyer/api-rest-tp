import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandeService } from './commande.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { Commande } from './entities/commande.entity';

@ApiTags('commande')
@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new commande' })
  @ApiResponse({ status: 201, description: 'The commande has been successfully created.', type: Commande })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandeService.create(createCommandeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all commandes' })
  @ApiResponse({ status: 200, description: 'Return all commandes.', type: [Commande] })
  findAll() {
    return this.commandeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a commande by ID' })
  @ApiResponse({ status: 200, description: 'Return the commande with the given ID.', type: Commande })
  @ApiResponse({ status: 404, description: 'Commande not found.' })
  findOne(@Param('id') id: string) {
    return this.commandeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a commande by ID' })
  @ApiResponse({ status: 200, description: 'The commande has been successfully updated.', type: Commande })
  @ApiResponse({ status: 404, description: 'Commande not found.' })
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateCommandeDto) {
    return this.commandeService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a commande by ID' })
  @ApiResponse({ status: 200, description: 'The commande has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Commande not found.' })
  remove(@Param('id') id: string) {
    return this.commandeService.remove(+id);
  }
}