import { HttpException } from '@nestjs/common';
import { IsNotEmpty,  } from "class-validator";
import { isValidMobile } from './utils';

export class CreateUserDto {
    @IsNotEmpty() firstName: string;
    @IsNotEmpty() lastName: string;
    @IsNotEmpty() password: string;
    @IsNotEmpty() phoneNumber: number;

    constructor(fname: string, lname: string, password: string, phone: string ) {
        if (fname && lname && password && phone) {
            this.firstName = fname;
            this.lastName = lname;
            this.password = password;
            if (isValidMobile(phone)) {
                this.phoneNumber = parseInt(phone.substring(1), 10)
            } else {
                throw new HttpException('Youre phone is not valid', 400);
            }
        } else {
            throw new HttpException('cant execute with provided params', 400);
        }
    }
}

export class LoginDto {
    @IsNotEmpty() phoneNumber: number;
    @IsNotEmpty() password: string;
    constructor(phoneNumber: string, password: string) {
        if (phoneNumber && password && isValidMobile(phoneNumber)) {
            this.phoneNumber = parseInt(phoneNumber.substring(1), 10);
            this.password = password;
        } else {
            throw new HttpException('user credentials is not valid', 401);
        }
    }
}

export class UserDto {}