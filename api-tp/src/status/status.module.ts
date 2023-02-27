import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { PrismaModule } from 'src/prisma.module';
import { StatusResolver } from './status.resolver';

@Module({
  controllers: [StatusController],
  providers: [StatusService],
  imports: [PrismaModule],
})
export class StatusModule {}
