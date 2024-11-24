import { CreateCommentResult } from '../domain/comment.result';

export class CreateCommentResponse {
  readonly id: number;
  readonly articleId: number;
  readonly message: string;

  constructor({
    result,
    message,
  }: {
    result: CreateCommentResult;
    message: string;
  }) {
    this.id = result.id;
    this.articleId = result.articleId;
    this.message = message;
  }
}
