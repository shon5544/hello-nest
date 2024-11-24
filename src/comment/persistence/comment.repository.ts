import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { CommentEntity } from "./comment.entity";

@Injectable()
export class CommentEntityRepository extends Repository<CommentEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(CommentEntity, dataSource.createEntityManager());
  }
}
