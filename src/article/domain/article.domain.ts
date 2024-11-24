interface ArticleProps {
  id?: number;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
}

export class Article {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isDeleted: boolean = false;

  constructor({
    id,
    title,
    content,
    createdAt,
    updatedAt,
    deletedAt,
    isDeleted = false,
  }: ArticleProps) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.isDeleted = isDeleted;
  }

  delete(): boolean {
    this.isDeleted = true;
    this.deletedAt = new Date();
    return this.isDeleted;
  }

  update({
    newTitle,
    newContent,
  }: {
    newTitle: string | undefined;
    newContent: string | undefined;
  }): Article {
    if (newTitle != undefined) {
      this.title = newTitle;
    }

    if (newContent != undefined) {
      this.content = newContent;
    }

    return this;
  }
}
