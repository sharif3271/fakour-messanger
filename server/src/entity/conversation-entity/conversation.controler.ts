import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ConversationServices } from './conversation.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.gaurd';

@Controller()
export class ConversationController {

  constructor(private readonly conversationServices: ConversationServices) {}

  @UseGuards(JwtAuthGuard)
  @Post('conversation/all')
  async sendMessage(@Request() req) {
    return this.conversationServices.getconversations(req);
  }

}
