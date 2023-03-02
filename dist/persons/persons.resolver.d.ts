import { PersonsService } from './persons.service';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
export declare class PersonsResolver {
    private personsService;
    constructor(personsService: PersonsService);
    createPerson(createPersonInput: CreatePersonInput): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Person[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    updatePerson(updatePersonInput: UpdatePersonInput): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
    removePerson(id: string): import(".prisma/client").Prisma.Prisma__PersonClient<import(".prisma/client").Person, never>;
}
