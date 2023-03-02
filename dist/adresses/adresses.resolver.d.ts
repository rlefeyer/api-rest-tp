import { AdressesService } from './adresses.service';
import { CreateAdressInput } from './dto/create-adress.input';
import { UpdateAdressInput } from './dto/update-adress.input';
export declare class AdressesResolver {
    private readonly adressesService;
    constructor(adressesService: AdressesService);
    createAdress(createAdressInput: CreateAdressInput): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Adress[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    updateAdress(updateAdressInput: UpdateAdressInput): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
    removeAdress(id: string): import(".prisma/client").Prisma.Prisma__AdressClient<import(".prisma/client").Adress, never>;
}
