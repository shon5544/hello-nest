import { Injectable } from '@nestjs/common';
import { ArticleRepository } from '../domain/article-repository.interface';
import { Article } from '../domain/article.domain';
import { ArticleEntity } from './article.entity';
import { ArticleEntityRepository } from './article.repository';

@Injectable()
export class ArticleRepositoryImpl implements ArticleRepository {
  constructor(
    private readonly articleEntityRepository: ArticleEntityRepository,
  ) {}

  async save(article: Article): Promise<Article> {
    const toSave = ArticleEntity.of(article);

    const saved = await this.articleEntityRepository.save(toSave);

    return new Article(saved);
  }
}
