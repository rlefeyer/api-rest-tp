import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class StoresService {
  
  constructor(private prisma: PrismaService) {}

  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({ data: createStoreDto });

  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(storeId: string, ) {
    return this.prisma.store.findUnique({
      where : {
        id: storeId,
      }
    })
    .articles();
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({
      where : {id},
      data: updateStoreDto
    });
  }

  remove(id: string) {
    return this. prisma.store.delete({
      where: {id}
    });
  }


}
