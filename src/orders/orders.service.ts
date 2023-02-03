import { Injectable } from '@nestjs/common';
import { Get, Version } from '@nestjs/common/decorators';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  @Version('2')
  @Get()
  findAllV2() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({where : {id: id}});
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({where : {id: id}, data: updateOrderDto});
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}