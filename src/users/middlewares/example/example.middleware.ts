import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req:Request, res:Response, next:NextFunction) {
    const { authorization } = req.headers;
    if(!authorization) throw new HttpException('No Authorization',HttpStatus.FORBIDDEN);
    if(authorization === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTcxMDAzNTY0OSwiZXhwIjoxNzEwMTIyMDQ5fQ.rK6zWOJygWbCR8JaGAahJ5hqTNDN-IGUOilT83wsCnw'){
      next();
    }else{
      throw new HttpException('Invalid authorization',HttpStatus.FORBIDDEN);
    }
  }
}
