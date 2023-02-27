import {PrismaService} from 'src/prisma/prisma.service';
import {Injectable} from '@nestjs/common';
import {CreatePersonInput} from './dto/create-person.input';
import {UpdatePersonInput} from './dto/update-person.input';

@Injectable()
export class PersonsService {
    constructor(private prisma: PrismaService) {
    }

    create(createPersonInput: CreatePersonInput) {
        return this.prisma.person.create({data: createPersonInput});
    }

    findAll() {
        return this.prisma.person.findMany();
    }

    findOne(id: string) {
        return this.prisma.person.findUniqueOrThrow({
            where: {id}
        });
    }

    update(id: string, updatePersonInput: UpdatePersonInput) {
        return this.prisma.person.update({
            where: {id},
            data: updatePersonInput,
        });
    }

    remove(id: string) {
        return this.prisma.person.delete({
            where: {id}
        });
    }
}
