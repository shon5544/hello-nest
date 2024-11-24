import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'rootpassword',
  database: 'hellonest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});
