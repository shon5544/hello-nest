import { Module } from '@nestjs/common';
import { ArticleController } from './application/article.controller';
import { ArticleService } from './domain/article.service';
import { ArticleEntityRepository } from './persistence/article.repository';
import { ArticleWriter } from './domain/article-writer.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './persistence/article.entity';
import { ArticleRepositoryImpl } from './persistence/article.repository-impl';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [
    ArticleService,
    ArticleEntityRepository,
    ArticleWriter,
    {
      provide: 'impl',
      useClass: ArticleRepositoryImpl,
    },
  ],
})
export class ArticleModule {}
