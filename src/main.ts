import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.enableCors({
    origin: '*', // You can replace '*' with specific allowed domains
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });
  await app.listen(3004);
}
bootstrap();
