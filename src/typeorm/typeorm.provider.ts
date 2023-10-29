import { dataSource } from 'typeorm.config';

export const typeOrmProvider = {
  provide: 'TYPEORM_DATA_SOURCE',
  useFactory: async () => dataSource.initialize(),
};
