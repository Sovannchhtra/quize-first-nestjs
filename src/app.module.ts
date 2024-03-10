import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizService } from './modules/quiz/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizRepository } from './modules/quiz/quiz.repository';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [QuizController],
  providers: [QuizService,QuizRepository],
})
export class AppModule {}
