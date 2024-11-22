import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from '../domain/article.domain';

interface ArticleEntityProps {
  id?: number;
  title: string;
  content: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  isDeleted?: boolean;
}

@Entity('articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id?: number = undefined;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column()
  isDeleted: boolean;

  constructor(props?: ArticleEntityProps) {
    const {
      id,
      title,
      content,
      createdAt = null,
      updatedAt = null,
      deletedAt = null,
      isDeleted = false,
    } = props || {};
  
    this.id = id;
    this.title = title;
    this.content = content;
    this.isDeleted = isDeleted;
  }

  toDomain(): Article {
    return new Article({
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      isDeleted: this.isDeleted,
    });
  }

  static of(article: Article): ArticleEntity {
    return new ArticleEntity({
      id: article.id,
      title: article.title,
      content: article.content,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      deletedAt: article.deletedAt,
      isDeleted: article.isDeleted,
    });
  }
}
