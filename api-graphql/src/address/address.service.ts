import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';

@Injectable()
export class AddressService {

  constructor(private prisma : PrismaService) {}
  
  create(createAddressInput: CreateAddressInput) {
    return this.prisma.address.create({ data : createAddressInput });
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({ where: { id: id } });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return this.prisma.address.update({where: { id: id }, data: updateAddressInput });
  }

  remove(id: number) {
    return this.prisma.address.delete({ where: { id: id } });
  }
}
