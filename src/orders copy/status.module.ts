import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { StatusService } from 'src/orders copy/status.service';
import { StatusController } from './status.controller';

@Module({
    controllers: [StatusController],
    providers: [StatusService],
    imports: [PrismaModule],
})
export class StatusModule {}