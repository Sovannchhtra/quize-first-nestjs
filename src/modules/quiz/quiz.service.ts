import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
     constructor(
          @InjectRepository(QuizRepository) private readonly quizRepository:QuizRepository
     ){}

     async createNewQuiz(quiz:CreateQuizDto){
          return await this.quizRepository.save(quiz);
     }
     
}
