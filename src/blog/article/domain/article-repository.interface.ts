import { Article } from './article.domain';

export interface ArticleRepository {
  save(article: Article): Promise<Article>;
}
