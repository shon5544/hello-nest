import { Body, Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { UserHelloRequest } from './user.request';
import { UserHelloResponse } from './user.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('body-test')
  @HttpCode(HttpStatus.OK)
  getHello2(@Body() request: UserHelloRequest): UserHelloResponse {
    const userName: string = request.name;

    return new UserHelloResponse(userName);
  }
}
