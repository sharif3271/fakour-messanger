import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserServices {
    constructor(
        @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>,
        private jwtService: JwtService
    ) {}

    createUser(userDto) {
        
    }
    login(req: any) {
        return {
            token: this.jwtService.sign({phoneNumber: 989106622531, id: '123BY16'})
        }
    }
}
