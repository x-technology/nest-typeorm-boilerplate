import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest-typeorm-boilerplate documentation')
    .setDescription(
      'You are looking at boilerplate which you can use to start developing your REST API much faster. Under the hood it uses Nest which is famous by its agnosticism principles. This is a great advantage of this framework, since you can use any technologies with it. But if the list of technologies listed bellow matches your needs (or you simply not sure), it could be a great idea to check your ideas using this boilerplate. It can save you a lot of time for initial configuration and research.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
