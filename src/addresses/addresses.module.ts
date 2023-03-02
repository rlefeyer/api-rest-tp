import {Module} from '@nestjs/common';
import {AddressesService} from './addresses.service';
import {AddressesResolver} from "./addresses.resolver";
import {PrismaModule} from "../prisma/prisma.module";

@Module({
    providers: [AddressesService, AddressesResolver],
    imports: [PrismaModule],
})
export class AddressesModule {
}
