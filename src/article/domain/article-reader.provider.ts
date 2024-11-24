import { Inject, Injectable } from '@nestjs/common';
import { ArticleRepository } from './article-repository.interface';
import { Article } from './article.domain';
import { ARTICLE_REPO } from '../article.inject-name';

@Injectable()
export class ArticleReader {
  constructor(
    @Inject(ARTICLE_REPO)
    private readonly articleRepository: ArticleRepository,
  ) {}

  async getById(id: number): Promise<Article> {
    const toReturn = await this.articleRepository.findById(id);

    if (toReturn == null) {
      throw new Error(`Article not found: id=${id}`);
    }

    return toReturn;
  }
}
