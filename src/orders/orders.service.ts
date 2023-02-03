import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(entity: Order) {
    return this.prisma.order.create({ data: entity });
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

