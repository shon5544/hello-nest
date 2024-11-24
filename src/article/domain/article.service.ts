import { Injectable } from '@nestjs/common';
import { CreateArticleResult, UpdateArticleResult } from './article.result';
import { ArticleWriter } from './article-writer.provider';
import { Article } from './article.domain';
import { ArticleReader } from './article-reader.provider';

@Injectable()
export class ArticleService {
  constructor(
    private readonly articleWriter: ArticleWriter,
    private readonly articleReader: ArticleReader,
  ) {}

  async create(title: string, content: string): Promise<CreateArticleResult> {
    const result: Article = await this.articleWriter.write(title, content);

    return new CreateArticleResult(result.id, result.title, result.content);
  }

  async update(
    id: number,
    title: string,
    content: string,
  ): Promise<UpdateArticleResult> {
    const toEdit: Article = await this.articleReader.getById(id);

    const result: Article = await this.articleWriter.update(toEdit, title, content);

    return new UpdateArticleResult(result.id, result.title, result.content);
  }
}
