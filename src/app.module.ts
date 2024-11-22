import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { databaseProviders } from './database.config';

@Module({
  imports: [ArticleModule, databaseProviders],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
