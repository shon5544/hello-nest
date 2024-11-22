import { Module } from '@nestjs/common';
import { ArticleController } from './application/article.controller';
import { ArticleService } from './domain/article.service';
import { ArticleEntityRepository } from './persistence/article.repository';
import { ArticleWriter } from './domain/article-writer.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './persistence/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [
    ArticleService, 
    ArticleEntityRepository,
    ArticleWriter,
  ],
})
export class ArticleModule {}
