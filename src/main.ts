import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    //Add your origins here
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"]
  });


  await app.listen(3000);
}
bootstrap();
