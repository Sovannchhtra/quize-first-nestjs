import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
     getData(){
          return [12,34,56,67,'Say Hello'];
     }
}
