import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from '../domain/comment.service';
import { CommentRepository } from '../domain/comment.repository-interface';
import { Article } from 'src/article/domain/article.domain';
import { Comment } from '../domain/comment.domain';
import { CommentEntityRepository } from '../persistence/comment.repository';
import { COMMENT_REPO } from '../comment.inject-name';
import { CommentRepositoryImpl } from '../persistence/comment.repository-impl';
import { ArticleModule } from 'src/article/article.module';

const mockCommentRepository: CommentRepository = {
  save: function (comment: Comment): Promise<Comment> {
    return Promise.resolve(new Comment({ 
      id: comment.id, 
      content: comment.content, 
      article: new Article({ id: 1, title: 'title', content: 'content' }) 
    }));
  },
};

describe('CommentController', () => {
  let controller: CommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ArticleModule],
      controllers: [CommentController],
      providers: [
        CommentService,
        {
          provide: CommentEntityRepository,
          useValue: mockCommentRepository,
        },
        {
          provide: COMMENT_REPO,
          useClass: CommentRepositoryImpl
        }
      ],
    }).compile();

    controller = module.get<CommentController>(CommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
