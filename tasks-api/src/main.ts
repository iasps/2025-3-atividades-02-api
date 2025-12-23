import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS
  app.enableCors();
  
  // Habilita validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não definidas nos DTOs
      forbidNonWhitelisted: true, // Rejeita requisições com propriedades extras
      transform: true, // Transforma tipos automaticamente
    }),
  );
  
  await app.listen(3000);
  console.log('🚀 API rodando em http://localhost:3000');
}
bootstrap();