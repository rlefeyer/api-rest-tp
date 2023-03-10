import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Person } from './entities/person.entity';
import { PersonSchema } from './schemas/person.schema';
import { AddressModule } from 'src/address/address.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    AddressModule,
  ],
  providers: [PersonResolver, PersonService],
})
export class PersonModule {}
