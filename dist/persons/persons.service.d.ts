import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
export declare class PersonsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPersonInput: CreatePersonInput): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Person[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    update(id: string, updatePersonInput: UpdatePersonInput): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
}
