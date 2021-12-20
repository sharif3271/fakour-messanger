import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MessageServices {
    constructor(
        @InjectRepository(MessageEntity) private readonly usersRepo: Repository<MessageEntity>,
        private jwtService: JwtService
    ) {}
    async sendMessage(req) {
        const body = req.body;
        const sender = req.user;
        console.log(body, sender);
    }
}
