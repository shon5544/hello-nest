import { Injectable } from '@nestjs/common';
import { ArticleEntityRepository } from '../persistence/article.repository';
import { ArticleEntity } from '../persistence/article.entity';
import { Article } from './article.domain';

@Injectable()
export class ArticleWriter {
  constructor(private readonly articleRepository: ArticleEntityRepository) {}

  async write(title: string, content: string): Promise<Article> {
    const toSave = new ArticleEntity(title, content);

    return (await this.articleRepository.save(toSave)).toDomain();
  }
}
