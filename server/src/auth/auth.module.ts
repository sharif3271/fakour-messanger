import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import 'dotenv/config';

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRETKEY,
            signOptions: {
                expiresIn: process.env.EXPIRESIN,
            },
        })
    ],
    controllers: [],
    providers: [JwtStrategy],
    exports: [PassportModule, JwtModule],
})
export class AuthModule {}