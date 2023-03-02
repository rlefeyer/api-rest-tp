import { AddressesService } from './addresses.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
export declare class AddressesResolver {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    createAddress(createAddressInput: CreateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Address[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    updateAddress(updateAddressInput: UpdateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
    removeAddress(id: string): import(".prisma/client").Prisma.Prisma__AddressClient<import(".prisma/client").Address, never>;
}
