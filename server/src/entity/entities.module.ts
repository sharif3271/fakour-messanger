import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserServices, UserController, UserEntity } from './user-entity';
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [UserServices],
    controllers: [UserController],
})
export class EntitiesModule {}