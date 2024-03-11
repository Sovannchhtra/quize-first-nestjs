import { Body, Controller, Get, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';

@Controller('users')
export class UsersController {
     @Get()
     getUser(@Query('sortBy') sortBy:string) {
          return [
               {
                    username:"Nai Sovannchhaktra",
                    email:"sovannchhaktra@gmail.com"
               },
               {
                    sortBy
               }
          ];
     }

     @Post('create')
     @UsePipes(new ValidationPipe())
     createUser(@Body() userData:createUserDto) {
          return { userData }
     }

     @Get(':id')
     getUserById(@Param('id') id:string){
          console.log(id);
          return { id };
     }
}
