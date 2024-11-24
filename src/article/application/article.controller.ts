import { Body, Controller, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateArticleResponse, UpdateArticleResponse } from './article.response';
import { ArticleService } from '../domain/article.service';
import { CreateArticleRequest, UpdateArticleRequest } from './article.request';
import { CreateArticleResult, UpdateArticleResult } from '../domain/article.result';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createArticle(
    @Body() request: CreateArticleRequest,
  ): Promise<CreateArticleResponse> {
    const result: CreateArticleResult = await this.articleService.create(
      request.title,
      request.content,
    );

    return new CreateArticleResponse(result, '성공적으로 생성됐습니다.');
  }

  @Put(":id")
  @HttpCode(HttpStatus.OK)
  async updateArticle(
    @Body() request: UpdateArticleRequest,
    @Param('id') id: number,
  ): Promise<UpdateArticleResponse> {
    const result: UpdateArticleResult = await this.articleService.update(
      id,
      request.title,
      request.content,
    );

    return new UpdateArticleResponse(result, '성공적으로 수정됐습니다.');
  }
}
