import { CreateAdressInput } from './dto/create-adress.input';
import { UpdateAdressInput } from './dto/update-adress.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AdressesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAdressInput: CreateAdressInput): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Adress[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    update(id: string, updateAdressInput: UpdateAdressInput): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
}
