import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Address, AddressSchema } from './address.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Address.name, schema: AddressSchema}]),
  ],
  providers: [AddressResolver, AddressService],
  exports: [AddressService]
})
export class AddressModule {}
