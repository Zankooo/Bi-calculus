// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // statika iz /public
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Swagger / OpenAPI
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('OpenAPI/Swagger dokumentacija')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'API Docs',
    jsonDocumentUrl: '/api-json',
  });

  await app.listen(3000);
  console.log('Swagger:   http://localhost:3000/api');
  console.log('HTML page: http://localhost:3000/page');
}
bootstrap();
