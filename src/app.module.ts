import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { ArticlesModule } from './articles/articles.module';
import { OrdersModule } from './orders/order.module';
import { StatusModule } from './orders copy/status.module';

@Module({
  imports: [StoresModule, ArticlesModule, OrdersModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
