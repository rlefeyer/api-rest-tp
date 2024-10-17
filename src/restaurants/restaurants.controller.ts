import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {Restaurant} from "./entities/restaurant.entity";

@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  @ApiResponse({status: 400, description: ' Bad Request.'})
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
    @ApiResponse({status: 200, description: 'The records has been successfully returned', type: [Restaurant]})
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully returned', type: Restaurant})
  findOne(@Param('id') id: string) {
    return this.restaurantsService.findOne(+id);
  }

  @Patch(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully updated', type: Restaurant})
  update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
    @ApiResponse({status: 200, description: 'The record has been successfully deleted'})
    @ApiResponse({status: 403, description: 'Forbidden.'})
    @ApiResponse({status: 404, description: 'Not Found.'})
  remove(@Param('id') id: string) {
    return this.restaurantsService.remove(+id);
  }
}
