import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { MessageServices } from './message.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

@Controller()
export class MessageController {

  constructor(private readonly messageService: MessageServices) {}

  @UseGuards(JwtAuthGuard)
  @Post('message/send')
  async sendMessage(@Request() req) {
    return this.messageService.sendMessage(req);
  }

}
