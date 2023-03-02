import {Module} from '@nestjs/common';
import {AdressesService} from './adresses.service';
import {AdressesResolver} from "./adresses.resolver";
import {PrismaModule} from "../prisma/prisma.module";

@Module({
    providers: [AdressesService, AdressesResolver],
    imports: [PrismaModule],
})
export class AdressesModule {}