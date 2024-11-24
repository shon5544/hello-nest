import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article.domain';
import { ArticleRepository } from './article-repository.interface';
import { ARTICLE_REPO } from '../article.inject-name';

@Injectable()
export class ArticleWriter {
  constructor(
    @Inject(ARTICLE_REPO)
    private readonly articleRepository: ArticleRepository,
  ) {}

  async write(title: string, content: string): Promise<Article> {
    const toSave = new Article({ title: title, content: content });

    return await this.articleRepository.save(toSave);
  }

  async update(article: Article, title: string, content: string): Promise<Article> {
    const updatedArticle: Article = article.update({ newTitle: title, newContent: content });

    return await this.articleRepository.save(updatedArticle);
  }
}
