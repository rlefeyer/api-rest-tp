import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  

  constructor(private prisma : PrismaService) {​​​​​​​​}​​​​​​​​

  findAllArticles(id: string) {
    return this.prisma.article.findMany({ where: { storeId: id } })
  }

  create(entity: Store) {
    return this.prisma.store.create({ data: entity });
  }

  createv2(entity: Store) {
    return this.prisma.store.create({ data: entity });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: String) {
    return this.prisma.store.findUnique({ where: { id: String(id) } });
  }

  update(id: String, entity: Store) {

    return this.prisma.store.update({where: { id: String(id) }, data: entity });
  }

  remove(id: String) {
    return this.prisma.store.delete({ where: { id: String(id) } });
  }
}
