import { Article } from 'src/article/domain/article.domain';

interface CommentProps {
  id?: number;
  content: string;
  article: Article;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  deletedAt?: Date | null;
  isDeleted?: boolean | null;
}

export class Comment {
  readonly id?: number;
  readonly content: string;
  readonly article: Article;
  readonly createdAt: Date | null;
  readonly updatedAt: Date | null;
  readonly deletedAt: Date | null;
  readonly isDeleted: boolean | null;

  constructor(props?: CommentProps) {
    const {
      id = undefined,
      content,
      article,
      createdAt = null,
      updatedAt = null,
      deletedAt = null,
      isDeleted = false,
    } = props || {};

    this.id = id;
    this.content = content;
    this.article = article;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.isDeleted = isDeleted;
  }
}
