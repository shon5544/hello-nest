import { Comment } from '../domain/comment.domain';
import { CommentRepository } from '../domain/comment.repository-interface';
import { Injectable } from '@nestjs/common';
import { CommentEntityRepository } from './comment.repository';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepositoryImpl implements CommentRepository {
  constructor(
    private readonly commentEntityRepository: CommentEntityRepository,
  ) {}

  async save(comment: Comment): Promise<Comment> {
    const toSave = CommentEntity.of(comment);

    const saved: CommentEntity = await this.commentEntityRepository.save(toSave);

    return saved.toDomain();
  }
}
