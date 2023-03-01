
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PersonModule } from './person/person.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AddressModule } from './address/address.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config' 

@Module({
  imports: [  
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PersonModule,
    AddressModule,
    MongooseModule.forRoot(process.env.MONGOOSE_URL)
  ],
})
export class AppModule {}
