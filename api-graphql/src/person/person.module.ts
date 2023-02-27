import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { PrismaModule } from 'src/prisma.module';

@Module({
  providers: [PersonResolver, PersonService],
  imports: [PrismaModule],
})
export class PersonModule {}
