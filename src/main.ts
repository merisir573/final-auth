import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.enableCors();
  await app.listen(3004);
}
bootstrap();
