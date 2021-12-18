import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { UserServices } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

@Controller()
export class UserController {
  constructor(private readonly userServices: UserServices) {}

  @Post('user/create')
  async createUser(@Body() body) {
    return await this.userServices.createUser(body);
  }

  @Post('user/login')
  async loginUser(@Body() body) {
    return this.userServices.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/all')
  async getUserInfo(@Request() req) {
    return this.userServices.getAllUsers(req);
  }
}
