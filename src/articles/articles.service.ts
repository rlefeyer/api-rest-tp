import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto,
      author: {
        connect: { store_id: '63d91523b858a57ff5704219' }
      }
    });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: string) {
    return this.prisma.store.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStoreDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateStoreDto,
    });
  }

  remove(id: string) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
