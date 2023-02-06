import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatusService {

  constructor(private prisma : PrismaService) {}

  create(createStatusDto: CreateStatusDto) {
    return this.prisma.status.create({ data : createStatusDto });
  }

  findAll() {
    return this.prisma.status.findMany();
  }

  findOne(id: number) {
    return this.prisma.status.findUnique({ where: { id: String(id) } });
  }
  update(id: number, updateStatusDto: UpdateStatusDto) {
    return this.prisma.status.update({where: { id: String(id) }, data: updateStatusDto });
  }

  remove(id: number) {
    return this.prisma.status.delete({ where: { id: String(id) } });
  }
}
