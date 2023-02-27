import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { PrismaModule } from 'src/prisma.module';

@Module({
  providers: [AddressResolver, AddressService],
  imports: [PrismaModule],
})
export class AddressModule {}
