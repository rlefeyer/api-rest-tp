import {Module} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {AddressesService} from './addresses.service';

@Module({
    providers: [AddressesService, PrismaService],
})
export class AddressesModule {
}
