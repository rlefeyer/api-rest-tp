import { Injectable } from '@nestjs/common';
import { Get, Version } from '@nestjs/common/decorators';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}
  create(createStatusDto: CreateStatusDto) {
    return this.prisma.status.create({ data: createStatusDto });
  }

  findAll() {
    return this.prisma.status.findMany();
  }

  @Version('2')
  @Get()
  findAllV2() {
    return this.prisma.status.findMany();
  }

  findOne(id: string) {
    return this.prisma.status.findUnique({where : {id: id}});
  }

  update(id: string, updateStatusDto: UpdateStatusDto) {
    return this.prisma.status.update({where : {id: id}, data: updateStatusDto});
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}