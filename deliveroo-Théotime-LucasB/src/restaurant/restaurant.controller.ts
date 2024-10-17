import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@ApiTags('restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new restaurant' })
  @ApiResponse({ status: 201, description: 'The restaurant has been successfully created.', type: Restaurant })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all restaurants' })
  @ApiResponse({ status: 200, description: 'Return all restaurants.', type: [Restaurant] })
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a restaurant by ID' })
  @ApiResponse({ status: 200, description: 'Return the restaurant with the given ID.', type: Restaurant })
  @ApiResponse({ status: 404, description: 'Restaurant not found.' })
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a restaurant by ID' })
  @ApiResponse({ status: 200, description: 'The restaurant has been successfully updated.', type: Restaurant })
  @ApiResponse({ status: 404, description: 'Restaurant not found.' })
  update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a restaurant by ID' })
  @ApiResponse({ status: 200, description: 'The restaurant has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Restaurant not found.' })
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(+id);
  }
}