import { Body, Controller,Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
     constructor(private readonly quizService:QuizService){}
     @Get('/')
     getQuiz(){
          return this.quizService.getData();
     }

     @Post('/create')
     @UsePipes(ValidationPipe)
     createQuiz(@Body() quizData:CreateQuizDto){
          return { data:quizData }
     }
}
