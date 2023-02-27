import { Injectable } from '@nestjs/common';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PersonService {

  constructor(private prisma : PrismaService) {}
  
  create(createPersonInput: CreatePersonInput) {
    return this.prisma.person.create({ data : createPersonInput });
  }

  findAll() {
    return this.prisma.person.findMany();
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id: id} });
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return this.prisma.person.update({where: { id: id }, data: updatePersonInput });
  }

  remove(id: number) {
    return this.prisma.address.delete({ where: { id: id } });
  }
}
