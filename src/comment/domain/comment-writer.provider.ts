import { Inject, Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository-interface';
import { Article } from 'src/article/domain/article.domain';
import { Comment } from './comment.domain';
import { COMMENT_REPO } from '../comment.inject-name';

@Injectable()
export class CommentWriter {
  constructor(
    @Inject(COMMENT_REPO)
    private readonly commentRepository: CommentRepository,
  ) {}

  async create(article: Article, content: string): Promise<Comment> {
    const toSave = new Comment({ article, content });
    
    return await this.commentRepository.save(toSave);
  }
}
