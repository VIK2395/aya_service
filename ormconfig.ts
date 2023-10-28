import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  // https://docs.nestjs.com/recipes/sql-typeorm
  // https://orkhan.gitbook.io/typeorm/docs/data-source
  // https://github.com/typeorm/typeorm/blob/master/docs/example-with-express.md
  // https://docs.nestjs.com/techniques/database
  // https://stackoverflow.com/questions/71803499/typeorm-when-trying-to-run-migrations-missing-required-argument-datasource
  // https://fig.io/manual/typeorm/migration:generate
  // https://dev.to/amirfakour/using-typeorm-migration-in-nestjs-with-postgres-database-3c75
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql-root-superuser-password',
  database: 'nest-app-db',
  entities: ['./src/**/*.entity.{ts,js}'],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
});

dataSource.initialize();
