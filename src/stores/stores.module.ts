import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { StoresController2 } from './stores.controller2';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StoresController, StoresController2],
  providers: [StoresService],
  imports: [PrismaModule],
})
export class StoresModule {}

