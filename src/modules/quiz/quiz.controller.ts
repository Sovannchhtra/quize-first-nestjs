import { Body, Controller,Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
     constructor(private readonly quizService:QuizService){}

     @Post('/create')
     @UsePipes(ValidationPipe)
     async createQuiz(@Body() quizData:CreateQuizDto){
          return await this.quizService.createNewQuiz(quizData);
     }
}
