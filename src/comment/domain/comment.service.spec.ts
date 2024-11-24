import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { CommentEntityRepository } from '../persistence/comment.repository';
import { COMMENT_REPO } from '../comment.inject-name';
import { CommentRepositoryImpl } from '../persistence/comment.repository-impl';
import { ArticleModule } from 'src/article/article.module';
import { CommentWriter } from './comment-writer.provider';

const mockCommentEntityRepository = {
  save: jest
    .fn()
    .mockImplementation(async (comment) => await Promise.resolve(comment)),
};

describe('CommentService', () => {
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ArticleModule],
      providers: [
        CommentService,
        CommentWriter,
        {
          provide: CommentEntityRepository,
          useValue: mockCommentEntityRepository,
        },
        {
          provide: COMMENT_REPO,
          useClass: CommentRepositoryImpl
        },
      ],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
