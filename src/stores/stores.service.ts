import { Injectable } from '@nestjs/common';
import { Get, Version } from '@nestjs/common/decorators';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}
  create(createStoreDto: CreateStoreDto) {
    return this.prisma.store.create({ data: createStoreDto });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  @Version('2')
  @Get()
  findAllV2() {
    return this.prisma.store.findMany();
  }

  findAllStoreArticles(id) {
    return this.prisma.articles.findMany({where : {storeId: id}});
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({where : {id: id}});
  }

  update(id: string, updateStoreDto: UpdateStoreDto) {
    return this.prisma.store.update({where : {id: id}, data: updateStoreDto});
  }

  remove(id: string) {
    return `This action removes a #${id} store`;
  }
}