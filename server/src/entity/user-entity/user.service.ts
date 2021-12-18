import { HttpException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginDto } from './user.dto';
import { isSamePass } from './utils';

@Injectable()
export class UserServices {
    constructor(
        @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>,
        private jwtService: JwtService
    ) {}

    generateToken(userEntity: UserEntity) {
        return {token: this.jwtService.sign({phoneNumber: userEntity.phoneNumber, id: userEntity.id})}
    }

    async createUser(body): Promise<{token: string}> {
        const userDto = new CreateUserDto(body.firstName, body.lastName, body.password, body.phoneNumber);
        const user = await this.usersRepo.find({ where: {phoneNumber: userDto.phoneNumber}})
        if (user && user.length) {
            throw new HttpException('user exists!', 401);
        } else {
            const userBeforeInsert = await this.usersRepo.create(userDto);
            const userEntity = await this.usersRepo.save(userBeforeInsert);
            return this.generateToken(userEntity)
        }
        
    }
    async login(body: {phoneNumber: string, password: string}) {
        const loginDto = new LoginDto(body.phoneNumber, body.password);
        const user = await this.usersRepo.findOne({ where: {phoneNumber: loginDto.phoneNumber}})
        if (user && (isSamePass(loginDto.password, user.password))) {
            return this.generateToken(user);
        } else {
            throw new HttpException('user credentials is not valid', 401);
        }
    }
    async getAllUsers(req) {
        const users = await this.usersRepo.find();
        return users.filter(user => user.id !== req.user.id).map(user => ({
            phoneNumber: user.phoneNumber,
            name: user.firstName + ' ' + user.lastName,
            userId: user.id
        }))
    }
}
