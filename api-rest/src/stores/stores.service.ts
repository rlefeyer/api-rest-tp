import { Injectable } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}
  create(entity: Store) {
    return this.prisma.store.create({ data: entity });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, entity: Store) {
    return this.prisma.store.update({
      where: {
        id,
      },
      data: entity,
    });
  }

  remove(id: string) {
    return this.prisma.store.delete({
      where: {
        id,
      },
    });
  }
}
