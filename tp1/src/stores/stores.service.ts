import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Entity } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}


  create(store: Store) {
    return this.prisma.store.create({data:store});
  }

  create2(store: Store) {
    return this.prisma.store.create({data:store});
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({where: {id: id}});
  }
  findAllArticles(id: string) {
    return this.prisma.article.findMany({where: {storeId: id}});
  }
  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({where: {id: id}, data: updateStoreDto});
  }

  remove(id: string) {
    return this.prisma.store.delete({where: {id: id}});
  }
}
