import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
     constructor(private userService:UsersService){}
     @Get()
     getUser() {
          return this.userService.fetchUser();
     }

     @Post('create')
     @UsePipes(new ValidationPipe())
     createUser(@Body() userData:createUserDto) {
          return this.userService.createUser(userData);
     }

     @Get(':id')
     getUserById(@Param('id') id:number){
          const user = this.userService.fetchUserByID(id);
          if(!user){
               throw new HttpException('user not found',HttpStatus.BAD_REQUEST);
          }
     }
}
