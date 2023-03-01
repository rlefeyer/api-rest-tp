import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}
  create(createStatusDto: CreateStatusDto) {
    return this.prisma.status.create({data: createStatusDto});
  }

  findAll() {
    return this.prisma.status.findMany();
  }

  findOne(id: string) {
    return this.prisma.status.findUnique({where: {id}});
  }

  update(id: string, updateStatusDto: UpdateStatusDto) {
    return this.prisma.status.update({where: {id}, data: updateStatusDto});
  }

  remove(id: string) {
    return this.prisma.status.delete({where: {id}});
  }
}
