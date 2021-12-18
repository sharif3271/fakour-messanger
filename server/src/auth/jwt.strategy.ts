import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: process.env.SECRETKEY,
            ignoreExpiration: false
        })
    }
    async validate(payload: {id: string}): Promise<{id: string}> {
        if (!payload) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }  
        const user = {...payload};
        return user;
    }
}