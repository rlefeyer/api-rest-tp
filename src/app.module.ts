import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './stores/stores.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [StoresModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
