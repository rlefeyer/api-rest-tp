import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { ArticlesModule } from './articles/articles.module';
import { OrdersModule } from './orders/orders.module';
import { StatusModule } from './status/status.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { RootResolver } from './resolver';


@Module({
  imports: [StoresModule, ArticlesModule, OrdersModule, StatusModule, ThrottlerModule.forRoot({
    ttl: 60,
    limit: 10,
  }), AuthModule, UsersModule, GraphQLModule.forRoot({
    autoSchemaFile: true,
    driver: ApolloDriver,
  }),],
  controllers: [AppController],
  providers: [AppService,RootResolver,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
    ],
})
export class AppModule {}
