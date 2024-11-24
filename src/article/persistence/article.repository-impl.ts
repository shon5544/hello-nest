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

  findById(id: number): Promise<Article | null> {
    return this.articleEntityRepository
      .findOne({
        where: { id },
      })
      .then((article) => {
        if (article != null) {
          return article.toDomain();
        }

        return null;
      });
  }

  async save(article: Article): Promise<Article> {
    const toSave = ArticleEntity.of(article);

    const saved: ArticleEntity = await this.articleEntityRepository.save(toSave);

    return saved.toDomain();
  }
}
