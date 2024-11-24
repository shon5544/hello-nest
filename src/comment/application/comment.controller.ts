import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommentService } from '../domain/comment.service';
import { CreateCommentRequest } from './comment.request';
import { CreateCommentResponse } from './comment.response';
import { CreateCommentResult } from '../domain/comment.result';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() request: CreateCommentRequest,
  ): Promise<CreateCommentResponse> {
    const result: CreateCommentResult = await this.commentService.create(
      request.articleId,
      request.content,
    );

    return new CreateCommentResponse({
      result,
      message: '성공적으로 생성됐습니다.',
    });
  }
}
