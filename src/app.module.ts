import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { databaseProviders } from './database.config';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [ArticleModule, databaseProviders, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
