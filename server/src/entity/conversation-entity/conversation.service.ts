import { ConversationEntity } from './conversation.entity';
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ConversationServices {
    constructor(
        @InjectRepository(ConversationEntity) private readonly usersRepo: Repository<ConversationEntity>,
        private jwtService: JwtService
    ) {}
    async getconversations(req) {
        const body = req.body;
        const sender = req.user;
    }
}
