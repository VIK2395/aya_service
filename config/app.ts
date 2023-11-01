import { registerAs } from '@nestjs/config';

const appConfig = {
  port: process.env.PORT,
};

export default registerAs('appConfig', () => appConfig);
