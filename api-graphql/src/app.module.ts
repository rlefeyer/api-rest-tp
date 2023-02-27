import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { PersonModule } from './person/person.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [GraphqlModule, PersonModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
