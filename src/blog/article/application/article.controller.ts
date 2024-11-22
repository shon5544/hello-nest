import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateArticleResponse } from './article.response';
import { ArticleService } from '../domain/article.service';
import { CreateArticleRequest } from './article.request';
import { CreateArticleResult } from '../domain/article.result';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBlog(
    @Body() request: CreateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const result: CreateArticleResult = await this.articleService.createArticle(
      request.title,
      request.content,
    );

    return new CreateArticleResponse(result, '성공적으로 생성됐습니다.');
  }
}
