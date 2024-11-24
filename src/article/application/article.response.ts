import { CreateArticleResult, UpdateArticleResult } from '../domain/article.result';

export class CreateArticleResponse {
  id: number;
  title: string;
  content: string;
  message: string;

  constructor(result: CreateArticleResult, message: string) {
    this.id = result.id;
    this.title = result.title;
    this.content = result.content;

    this.message = message;
  }
}

export class UpdateArticleResponse {
  id: number;
  title: string;
  content: string;
  message: string;

  constructor(result: UpdateArticleResult, message: string) {
    this.id = result.id;
    this.title = result.title;
    this.content = result.content;

    this.message = message;
  }
}
