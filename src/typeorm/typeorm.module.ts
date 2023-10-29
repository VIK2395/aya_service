import { Module } from '@nestjs/common';
import { typeOrmProvider } from './typeorm.provider';

@Module({
  providers: [typeOrmProvider],
  exports: [typeOrmProvider],
})
export class TypeOrmModule {}
