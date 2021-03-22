import AdminBro from 'admin-bro';
import { Database, Resource } from '@admin-bro/typeorm';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import 'dotenv/config';

import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT;

AdminBro.registerAdapter({ Database, Resource });

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', '..', 'src/public'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'src/views'));
  app.set('view engine', 'hbs');

  // await app.listen(3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  await app.listen(port);
  Logger.log(`Server started running onhttp://localhost:${port}`, 'Bootstrap');
}

bootstrap();
