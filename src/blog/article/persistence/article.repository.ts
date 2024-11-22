import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleEntityRepository extends Repository<ArticleEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ArticleEntity, dataSource.createEntityManager());
  }
}
