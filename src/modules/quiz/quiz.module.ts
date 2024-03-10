import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Module({
  controllers: [QuizController],
  imports:[TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService,QuizRepository]
})
export class QuizModule {}
