import { ArticleEntity } from 'src/blog/article/persistence/article.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ArticleEntity)
  article: ArticleEntity;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  constructor(
    id: number,
    article: ArticleEntity,
    content: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.article = article;
    this.content = content;
    this.createdAt = createdAt;
  }
}
