import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  create(createAddressInput: CreateAddressInput) {
    return this.prisma.adresse.create({ data: createAddressInput });
  }

  findAll() {
    return this.prisma.adresse.findMany();
  }

  findOne(id: number) {
    return this.prisma.adresse.findUnique({ where: { id: id } });
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return this.prisma.adresse.update({
      where: { id: id },
      data: updateAddressInput,
    });
  }

  remove(id: number) {
    return this.prisma.adresse.delete({ where: { id: id } });
  }
}
