import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Order } from './entities/order.entity';



@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Création de la commande',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    const entity = this.convertDtoToEntity(createOrderDto);
    return this.ordersService.create(entity);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Tous les commandes',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Voici la commande demandée',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'modification de la commande demandée',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'suppression de la commande demandée',
  })
  @ApiResponse({
    status: 404,
    description: 'Page introuvable',
  })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }

  private convertDtoToEntity(dto: CreateOrderDto): Order {
    const order = new Order();
    order.numero = dto.numero;
    order.quantity = dto.quantity;
    return order;
  }
}
