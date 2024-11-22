import { Injectable } from '@nestjs/common';
import { CreateArticleResult } from './article.result';
import { ArticleWriter } from './article-writer.provider';
import { Article } from './article.domain';

@Injectable()
export class ArticleService {
  constructor(private readonly articleWriter: ArticleWriter) {}

  async create(title: string, content: string): Promise<CreateArticleResult> {
    const result: Article = await this.articleWriter.write(title, content);

    return new CreateArticleResult(result.id, result.title, result.content);
  }
}
