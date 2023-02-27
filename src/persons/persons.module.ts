import {Module} from '@nestjs/common';
import {PersonsService} from './persons.service';
import {PersonsResolver} from './persons.resolver';
import {PrismaService} from '../prisma/prisma.service';
import {AddressesService} from '../addresses/addresses.service';

@Module({
    providers: [PersonsResolver, PersonsService, AddressesService, PrismaService]
})
export class PersonsModule {
}
