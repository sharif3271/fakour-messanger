import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { UserServices } from './user.service';
import {CreateUserDto} from './user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';
import { Logger } from "@nestjs/common";

@Controller()
export class UserController {
  constructor(private readonly userServices: UserServices) {}

  @UseGuards(JwtAuthGuard)
  @Post('user/create')
  createUser(@Body() body) {
    return this.userServices.createUser(body);
  }

  @Post('user/login')
  loginUser(@Request() req) {
    return this.userServices.login(req);
  }
}
