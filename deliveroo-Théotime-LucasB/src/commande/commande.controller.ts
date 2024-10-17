import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
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
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The commande has been successfully created.', type: Commande })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request.' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandeService.create(createCommandeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all commandes' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all commandes.', type: [Commande] })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error.' })
  findAll() {
    return this.commandeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a commande by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return the commande with the given ID.', type: Commande })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Commande not found.' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error.' })
  findOne(@Param('id') id: string) {
    return this.commandeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a commande by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'The commande has been successfully updated.', type: Commande })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Commande not found.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request.' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error.' })
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateCommandeDto) {
    return this.commandeService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a commande by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'The commande has been successfully deleted.' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Commande not found.' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized.' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error.' })
  remove(@Param('id') id: string) {
    return this.commandeService.remove(+id);
  }
}