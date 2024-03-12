import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
     private DataUser = [
          {
               username:"Nai Sovannchhaktra",
               email:"sovannchhaktra@gmail.com"
          },
     ];
     fetchUser(){
          return this.DataUser;
     }

     createUser(user:CreateUserType){
          this.DataUser.push(user);
          return;
     }

     fetchUserByID(id:number){
          return null;
     }
}
