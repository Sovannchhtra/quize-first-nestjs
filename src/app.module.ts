import { Module } from '@nestjs/common';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizService } from './modules/quiz/quiz.service';

@Module({
  imports: [QuizModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class AppModule {}
