import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  create(CreateOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: CreateOrderDto });

  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findUniqueOrThrow({
      where : {id}
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where : {id},
      data: updateOrderDto,
    });
  }

  remove(id: string) {
    return this. prisma.order.delete({
      where: {id}
    });
  }
}