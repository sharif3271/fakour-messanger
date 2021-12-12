import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { Logger } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: process.env.SECRETKEY,
            ignoreExpiration: false
        })
    }
    async validate(payload: any): Promise<any> {
        Logger.log('payload: ');
        Logger.log(payload);
        const user = null // u shoud fetch user;
        if (!user) {
            return payload
            // throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }    
        return user;
    }
}