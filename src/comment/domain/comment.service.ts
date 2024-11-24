import { Injectable } from '@nestjs/common';
import { CreateCommentResult } from './comment.result';
import { ArticleReader } from 'src/article/domain/article-reader.provider';
import { CommentWriter } from './comment-writer.provider';
import { Comment } from './comment.domain';

@Injectable()
export class CommentService {
  constructor(
    private readonly articleReader: ArticleReader,
    private readonly commentWriter: CommentWriter,
  ) {}

  async create(
    articleId: number,
    content: string,
  ): Promise<CreateCommentResult> {
    const article = await this.articleReader.getById(articleId);

    const createdComment: Comment = await this.commentWriter.create(
      article,
      content,
    );

    return new CreateCommentResult({
      id: createdComment.id,
      articleId: createdComment.article.id,
    });
  }
}
