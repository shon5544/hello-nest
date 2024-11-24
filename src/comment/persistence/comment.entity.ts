import { ArticleEntity } from 'src/article/persistence/article.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Comment } from '../domain/comment.domain';

interface CommentEntityProps {
  id?: number;
  content: string;
  article: ArticleEntity;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  isDeleted: boolean | null;
}

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id?: number = undefined;

  @Column()
  content: string;

  @ManyToOne(() => ArticleEntity)
  article: ArticleEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  isDeleted: boolean;

  constructor(props?: CommentEntityProps) {
    const {
      id,
      content,
      article,
      createdAt = null,
      updatedAt = null,
      deletedAt = null,
      isDeleted = false,
    } = props || {};

    this.id = id;
    this.content = content;
    this.article = article;
    this.isDeleted = isDeleted;
  }

  toDomain(): Comment {
    return new Comment({
      id: this.id,
      content: this.content,
      article: this.article.toDomain(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      isDeleted: this.isDeleted,
    });
  }

  static of(comment: Comment): CommentEntity {
    return new CommentEntity({
      id: comment.id,
      content: comment.content,
      article: ArticleEntity.of(comment.article),
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      deletedAt: comment.deletedAt,
      isDeleted: comment.isDeleted,
    });
  }
}
