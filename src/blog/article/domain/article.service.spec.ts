import { Test, TestingModule } from '@nestjs/testing';
import { ArticleEntityRepository } from '../persistence/article.repository';
import { ArticleWriter } from './article-writer.provider';
import { ArticleService } from './article.service';
import { ArticleEntity } from '../persistence/article.entity';
import { CreateArticleResult } from './article.result';
import { ArticleRepositoryImpl } from '../persistence/article.repository-impl';

const mockArticleEntityRepository = {
  save: jest
    .fn()
    .mockImplementation(
      async (articleEntity: ArticleEntity): Promise<ArticleEntity> => {
        const toReturn = new ArticleEntity({
          id: 1,
          title: articleEntity.title,
          content: articleEntity.content,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: undefined,
          isDeleted: false,
        });

        return Promise.resolve(toReturn);
      },
    ),
};

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        ArticleWriter,
        {
          provide: ArticleEntityRepository,
          useValue: mockArticleEntityRepository,
        },
        {
          provide: 'impl',
          useClass: ArticleRepositoryImpl,
        },
      ],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should return CreateArticleResult', async () => {
      const result: CreateArticleResult = await service.create('hello', 'nest');
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.title).toBe('hello');
      expect(result.content).toBe('nest');
    });
  });
});
