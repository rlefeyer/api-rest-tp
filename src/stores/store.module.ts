import { Module } from '@nestjs/common';
import { StoresController } from 'src/stores/stores.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { StoresService } from 'src/stores/stores.service';

@Module({
    controllers: [StoresController],
    providers: [StoresService],
    imports: [PrismaModule],
})
export class StoresModule {}