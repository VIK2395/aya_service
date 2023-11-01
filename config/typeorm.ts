import { DataSource, DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/migrations/*.js'],
  migrationsRun: true,
  synchronize: false,
};

export default registerAs('typeOrmConfig', () => typeOrmConfig);

export const dataSource = new DataSource(typeOrmConfig);

// 1 https://docs.nestjs.com/recipes/sql-typeorm
// 2 https://docs.nestjs.com/techniques/database
// With approach above (1), we do not need to install @nestjs/typeorm package (2) as we configure typeorm yourself
// https://orkhan.gitbook.io/typeorm/docs/data-source
// https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
// https://dev.to/amirfakour/using-typeorm-migration-in-nestjs-with-postgres-database-3c75

// Orm config props
// https://typeorm.biunav.com/en/connection-options.html#what-is-connectionoptions

// __dirname => /home/nest-app/dist

// https://stackoverflow.com/questions/71625087/typeorm-migration-file-must-contain-a-typescript-javascript-code-and-export-a
// https://orkhan.gitbook.io/typeorm/docs/migrations
