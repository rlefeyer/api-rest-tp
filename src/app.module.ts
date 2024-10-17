import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { OrdersModule } from './orders/orders.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [UsersModule, RestaurantsModule, OrdersModule, MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
