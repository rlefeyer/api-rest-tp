import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.articles.create({ data: createArticleDto });
  }

  findAll() {
    return this.prisma.articles.findMany();
  }

  findOne(id: string) {
    return this.prisma.articles.findUnique({where : {id: id}});
  }

  update(id: string, updateArticleDto: UpdateArticleDto) {
    return this.prisma.articles.update({where : {id: id}, data: updateArticleDto});
  }

  remove(id: string) {
    return `This action removes a #${id} article`;
  }
}
