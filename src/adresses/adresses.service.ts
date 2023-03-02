import {Injectable} from '@nestjs/common';
import {CreateAdressInput} from './dto/create-adress.input';
import {UpdateAdressInput} from './dto/update-adress.input';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class AdressesService {
    constructor(private prisma: PrismaService) {
    }

    create(createAdressInput: CreateAdressInput) {
        return this.prisma.adress.create({ data: createAdressInput });
    }

    findAll() {
        return this.prisma.adress.findMany();
    }

    findOne(id: string) {
        return this.prisma.adress.findUniqueOrThrow({
            where: {id: id}
        });
    }

    update(id: string, updateAdressInput: UpdateAdressInput) {
        return this.prisma.adress.update({
            where: {id: id},
            data: {
                city: updateAdressInput.city,
                country: updateAdressInput.country,
                street: updateAdressInput.street,
                zipcode: updateAdressInput.zipcode,
            },
        });
    }

    remove(id: string) {
        return this.prisma.adress.delete({
            where: {id: id}
        });
    }
}