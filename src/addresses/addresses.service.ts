import {Injectable} from '@nestjs/common';
import {CreateAddressInput} from './dto/create-address.input';
import {UpdateAddressInput} from './dto/update-address.input';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class AddressesService {
    constructor(private prisma: PrismaService) {
    }

    create(createAddressInput: CreateAddressInput) {
        return this.prisma.address.create({data: createAddressInput});
    }

    findAll() {
        return this.prisma.address.findMany();
    }

    findOne(id: string) {
        return this.prisma.address.findUniqueOrThrow({
            where: {id}
        });
    }

    update(id: string, updateAddressInput: UpdateAddressInput) {
        return this.prisma.address.update({
            where: {id},
            data: updateAddressInput,
        });
    }

  remove(id: string) {
        return this.prisma.address.delete({
            where: {id}
        });
    }
}
