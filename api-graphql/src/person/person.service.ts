import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonService {
  constructor(private prisma: PrismaService) {}

  create(createPersonInput: CreatePersonInput) {
    return this.prisma.personne.create({ data: createPersonInput });
  }

  findAll() {
    return this.prisma.personne.findMany();
  }

  findOne(id: number) {
    return this.prisma.personne.findUnique({ where: { id: id } });
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return this.prisma.personne.update({
      where: { id: id },
      data: updatePersonInput,
    });
  }

  remove(id: number) {
    return this.prisma.personne.delete({ where: { id: id } });
  }
}
