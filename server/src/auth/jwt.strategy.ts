import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { HttpStatus } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { IAuthUser } from "src/entity/user-entity/user.model";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: process.env.SECRETKEY,
            ignoreExpiration: false
        })
    }
    async validate(payload: IAuthUser): Promise<IAuthUser> {
        if (!payload) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }  
        const user = {...payload};
        return user;
    }
}