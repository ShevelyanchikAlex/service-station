import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5300;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
