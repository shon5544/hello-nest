import { Module } from '@nestjs/common';
import { CommentService } from './domain/comment.service';
import { CommentController } from './application/comment.controller';
import { ArticleModule } from 'src/article/article.module';
import { CommentRepositoryImpl } from './persistence/comment.repository-impl';
import { COMMENT_REPO } from './comment.inject-name';
import { CommentWriter } from './domain/comment-writer.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './persistence/comment.entity';
import { CommentEntityRepository } from './persistence/comment.repository';

@Module({
  imports: [ArticleModule, TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentController],
  providers: [
    CommentService,
    CommentEntityRepository,
    CommentWriter,
    {
      provide: COMMENT_REPO,
      useClass: CommentRepositoryImpl,
    },
  ],
})
export class CommentModule {}
