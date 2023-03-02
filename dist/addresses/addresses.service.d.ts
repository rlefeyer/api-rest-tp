import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AddressesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAddressInput: CreateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Address[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    update(id: string, updateAddressInput: UpdateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
}
