import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau restaurant' })
  @ApiResponse({
    status: 201,
    description: 'Le restaurant a été créé avec succès.',
  })
  @ApiResponse({
    status: 400,
    description: 'Les données fournies sont incorrectes.',
  })
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les restaurants' })
  @ApiResponse({
    status: 200,
    description: 'Liste des restaurants récupérée avec succès.',
  })
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un restaurant par ID' })
  @ApiResponse({ status: 200, description: 'Restaurant trouvé.' })
  @ApiResponse({ status: 404, description: 'Restaurant non trouvé.' })
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un restaurant' })
  @ApiResponse({
    status: 200,
    description: 'Le restaurant a été mis à jour avec succès.',
  })
  @ApiResponse({
    status: 400,
    description: 'Les données fournies sont incorrectes.',
  })
  @ApiResponse({ status: 404, description: 'Restaurant non trouvé.' })
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un restaurant' })
  @ApiResponse({
    status: 200,
    description: 'Le restaurant a été supprimé avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Restaurant non trouvé.' })
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
