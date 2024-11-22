import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from '../domain/article.domain';

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
  isDeleted: boolean = false;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.isDeleted = false;
  }

  toDomain(): Article {
    return new Article(
      this.id,
      this.title,
      this.content,
      this.createdAt,
      this.updatedAt,
      this.deletedAt,
      this.isDeleted,
    );
  }
}
