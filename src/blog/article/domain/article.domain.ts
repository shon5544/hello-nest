export class Article {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isDeleted: boolean = false;

  constructor(
    id: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    isDeleted: boolean,
  ) {
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
}
