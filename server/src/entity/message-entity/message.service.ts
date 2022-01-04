import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ISendMessageReq, IReqUser } from './message.model';
import { ConversationEntity } from '../conversation-entity';
import { UserEntity } from '../user-entity';
import { isValidMobile } from './utils';
import { Connection } from 'typeorm';

@Injectable()
export class MessageServices {
    messageRepo =  this.connection.getRepository(MessageEntity);
    conversationRepo =  this.connection.getRepository(ConversationEntity);
    usersRepo =  this.connection.getRepository(UserEntity);

    constructor(
        private connection: Connection
    ) {}

    async sendMessage(req: ISendMessageReq) {
        this.checkReq(req);
        const senderReciver = await this.getUsers(req);
        const conversation = await this.getConversation(req, senderReciver);
        const message = this.messageRepo.create({
            senderPhoneNumber: senderReciver[0].phoneNumber,
            reciverPhoneNumber: senderReciver[1].phoneNumber,
            conversation: conversation,
            textContent: req.body.textContent
        });
        await this.messageRepo.save(message);
        return message;
    }
    async getConversationMessages(convId: string, req: IReqUser) {
        if (await this.isUserPartOfConversation(convId, req.user.id)) {
            return (await this.messageRepo.find({
                where: {
                    conversationId: parseInt(convId, 10)
                }
            }))
        } else {
            throw new HttpException('conversation does not exist.', HttpStatus.UNAUTHORIZED);
        }
    }

    // UTILS
    async getConversation(req: ISendMessageReq, users: UserEntity[]): Promise<ConversationEntity> {
        return await this.conversationRepo.findOne({where: {id: req.body.conversationId}}) ||
               await this.getPreviouseConversation(users) ||
               await this.conversationRepo.save(this.conversationRepo.create({users}))
    }
    async getPreviouseConversation(users: UserEntity[]) {
        const messages = await this.messageRepo.createQueryBuilder()
        .where({
            senderPhoneNumber: users[0].phoneNumber,
            reciverPhoneNumber: users[1].phoneNumber
        })
        .orWhere({
            senderPhoneNumber: users[1].phoneNumber,
            reciverPhoneNumber: users[0].phoneNumber
        })
        .getMany();
        if (messages?.length) {
            return await this.conversationRepo.findOne({
                where: {
                    id: messages[0].conversationId
                }
            })
        } else {
            return null
        }
    }
    async getUsers(req: ISendMessageReq): Promise<UserEntity[]> {
        try {
            const reciverUser = await this.usersRepo.findOne({where: {phoneNumber: parseInt(req.body.reciverPhoneNumber.substring(1), 10)}});
            const senderUser = await this.usersRepo.findOne({where: {id: req.user.id}});
            if (reciverUser && senderUser && (senderUser.id !== reciverUser.id)) {
                return [senderUser, reciverUser]
            } else {
                this.notAcceptable();
            }
        } catch(e) {
            this.notAcceptable();
        }
    }
    checkReq(req: ISendMessageReq) {
        if (
                !req.body.textContent ||
                !req.body.reciverPhoneNumber ||
                !isValidMobile(req.body.reciverPhoneNumber)
            ) {
                throw new HttpException('textContent and reciverPhoneNumber should be provided correctly.', HttpStatus.BAD_REQUEST);            
        }
    }
    async isUserPartOfConversation(convId: string, userId: string) {
        return (await this.usersRepo.findOne({
            where : {id: userId},
            relations: ['conversations']
        }))?.conversations?.some(ConvItem => String(ConvItem.id) === convId)
    }
    // ERRORS
    notAcceptable() {
        throw new HttpException('users could not be found.', HttpStatus.NOT_ACCEPTABLE);
    }
}
