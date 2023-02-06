import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { StatusService } from 'src/status/status.service';
import { CreateStatusDto } from 'src/status/dto/create-status.dto';
import { UpdateStatusDto } from 'src/status/dto/update-status.dto';

@Injectable()
export class OrdersService {

  constructor(private prisma : PrismaService) {}

  create(createOrderDto: CreateOrderDto) { 
    return this.prisma.order.create({ data : createOrderDto});
  }

  async createMany(createOrderDto: CreateOrderDto) { 
    let i = 0;
    let createStatusDto: CreateStatusDto = { name: 'en cours ('+i+'/10000)'};
    let updateStatusDto: UpdateStatusDto = { name: 'Statut : terminé' };

    const status = await this.prisma.status.create({ data: createStatusDto });

    for (i = 0; i < 10000; i++) {
      
      await this.prisma.order.create({ data : createOrderDto});
      updateStatusDto = { name: 'en cours ('+i+'/10000)' };
      let date = new Date();
      console.log( `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`+' Statut : en cours ('+i+'/10000)');
      await this.prisma.status.update({ where: { id: status.id }, data: updateStatusDto });
      
    }

    return this.prisma.status.update({ where: { id: status.id }, data: updateStatusDto });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: number) {
    return this.prisma.order.findUnique({ where: { id: String(id) } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({where: { id: String(id) }, data: updateOrderDto });
  }

  remove(id: number) {
    return this.prisma.order.delete({ where: { id: String(id) } });
  }
}
