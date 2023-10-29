import { DataSource } from 'typeorm';

// 1 https://docs.nestjs.com/recipes/sql-typeorm
// 2 https://docs.nestjs.com/techniques/database
// With approach above (1), we do not need to install @nestjs/typeorm package (2) as we configure typeorm yourself
// https://orkhan.gitbook.io/typeorm/docs/data-source
// https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
// https://dev.to/amirfakour/using-typeorm-migration-in-nestjs-with-postgres-database-3c75

// Orm config props
// https://typeorm.biunav.com/en/connection-options.html#what-is-connectionoptions
export const dataSource = new DataSource({
  type: 'mysql',
  host: 'nest-app-mysqldb',
  port: 3306,
  username: 'root',
  password: 'mysql-root-superuser-password',
  database: 'nest-app-db',
  entities: [__dirname + '/src/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/src/migrations/*.{ts,js}'],
  migrationsRun: true,
  synchronize: false,
});

// __dirname => /home/nest-app/dist
