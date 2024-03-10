import { IsEmpty, IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
     @IsNotEmpty({message:'The quiz should hare a title'})
     @Length(3,255)
     title:string;

     @IsNotEmpty()
     @Length(5)
     description:string;
}