import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article.domain';
import { ArticleRepository } from './article-repository.interface';

@Injectable()
export class ArticleWriter {
  constructor(
    @Inject('impl')
    private readonly articleRepository: ArticleRepository,
  ) {}

  async write(title: string, content: string): Promise<Article> {
    const toSave = new Article({ title: title, content: content });

    return await this.articleRepository.save(toSave);
  }
}
