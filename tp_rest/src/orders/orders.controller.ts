import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post()
  createMany() {
    for (let i = 0; i < 10000; i++) {
      // await this.prisma.order.create({ data:CreateOrderDto });
      // updateStatus = {name: 'en cours ('+i+'/10 000)'};
      // let date = new Date();
      // console.log({${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth()+1)}})
    }
  }

  @Get()
  @ApiResponse({ status: 201, description: 'Here is the list of all of the found records' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}