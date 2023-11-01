import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DumpModule } from './dump/dump.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from 'config/typeorm';
import appConfig from 'config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeOrmConfig, appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      // https://stackoverflow.com/questions/71808870/nest-cant-resolve-datasource-as-dependency
      // https://docs.nestjs.com/techniques/database#custom-datasource-factory
      useFactory: async (configService: ConfigService) => {
        return configService.get('typeOrmConfig');
      },
      inject: [ConfigService],
    }),
    DumpModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
