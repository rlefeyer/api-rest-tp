import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsResolver } from './persons.resolver';
import { AdressesService } from 'src/adresses/adresses.service';
import {PrismaService} from '../prisma/prisma.service';

@Module({
  providers: [PersonsResolver, PersonsService, AdressesService, PrismaService]
})
export class PersonsModule {}
