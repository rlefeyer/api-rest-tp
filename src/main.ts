import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder  } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Stores example')
    .setDescription('The stores API description')
    .setVersion('1.0')
    .addBearerAuth()
    // .addSecurity('bearer', { type: 'http', scheme: 'bearer', bearerFormat: 'JWT'})
    //addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
