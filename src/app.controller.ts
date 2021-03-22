import {
  Controller,
  Get,
  Render,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { Console } from 'node:console';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello Free Mind' };
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login/')
  async login(@Request() req) {
    console.log('App Control???');
    return req.user;
  }
}
