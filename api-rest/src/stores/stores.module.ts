import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresControllerV1 } from './stores.controller';
import { StoresControllerV2 } from './storesv2.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StoresControllerV1, StoresControllerV2],
  providers: [StoresService],
  imports: [PrismaModule],
})
export class StoresModule {}
