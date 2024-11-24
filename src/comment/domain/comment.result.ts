export class CreateCommentResult {
  readonly id: number;
  readonly articleId: number;

  constructor({ id, articleId }: { articleId: number; id: number }) {
    this.id = id;
    this.articleId = articleId;
  }
}
