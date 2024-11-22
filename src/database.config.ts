import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from './blog/article/persistence/article.entity';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'rootpassword',
  database: 'hellonest',
  entities: [ArticleEntity],
  synchronize: true,
});
