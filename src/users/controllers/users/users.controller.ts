import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
     @Get()
     getUser() {
          return [{username:"Nai Sovannchhaktra",email:"sovannchhaktra@gmail.com"}];
     }

     @Get('posts')
     getUserPosts() {
          return [{
               username:"Nai Sovannchhaktra",
               email:"sovannchhaktra@gmail.com",
               posts:[
                    {
                         id:1,
                         post:"Post 1"
                    },
                    {
                         id:2,
                         post:"Post 2"
                    },
                    {
                         id:3,
                         post:"Post 3"
                    }
               ]
          }]
     }
}
