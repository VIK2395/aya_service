import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // https://stackoverflow.com/questions/73105792/nestjs-typeorm-ormconfig-json-is-not-being-used
      // https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
      type: 'mysql',
      host: 'nest-app-mysqldb',
      port: 3306,
      username: 'root',
      password: 'mysql-root-superuser-password',
      database: 'nest-app-db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
