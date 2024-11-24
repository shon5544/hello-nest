import { Comment } from './comment.domain';

export interface CommentRepository {
  save(comment: Comment): Promise<Comment>;
}
