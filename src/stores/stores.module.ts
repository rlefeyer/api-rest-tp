import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Stores2Controller } from './stores2.controller';

@Module({
  controllers: [StoresController, Stores2Controller],
  providers: [StoresService],
  imports: [PrismaModule],
})
export class StoresModule {}
