import { Injectable } from '@nestjs/common';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(entity: Article) {
    return this.prisma.article.create({ data: entity });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: string) {
    return this.prisma.article.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: string) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
