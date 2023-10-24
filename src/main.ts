import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from '@juicyllama/nestjs-redoc';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, options);


  // TODO: Here a setting like `maxModelDepth` would be nice so that you can limit for example the FirstDto to show the ThirdDto
  const redocOptions: RedocOptions = {
    title: 'Hello Nest',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#F0F0F0',
      altText: 'PetStore logo',
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    tagGroups: [
      {
        name: 'Core resources',
        tags: ['cats'],
      },
    ],
  };
  // Instead of using SwaggerModule.setup() you call this module
  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(3000);

}
bootstrap();
