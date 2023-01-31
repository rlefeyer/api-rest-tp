import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class StoresService {
  

  constructor(private prisma : PrismaService) {​​​​​​​​}​​​​​​​​

  findAllArticles(id: string) {
    return this.prisma.article.findMany({ where: { storeId: id } })
  }

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({ data: createStoreDto });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: String) {
    return this.prisma.store.findUnique({ where: { id: String(id) } });
  }

  update(id: String, updateStoreDto: UpdateStoreDto) {

    return this.prisma.store.update({where: { id: String(id) }, data: updateStoreDto });
  }

  remove(id: String) {
    return this.prisma.store.delete({ where: { id: String(id) } });
  }
}
