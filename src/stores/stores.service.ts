import { Injectable } from '@nestjs/common';
import { Store } from './entities/store.entity';
import { UpdateStoreDto } from './dto/update-store.dto';
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

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({
      where: {
        id,
      },
      data: updateStoreDto,
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
