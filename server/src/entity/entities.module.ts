import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserServices, UserController, UserEntity } from './user-entity';
import { MessageController, MessageEntity, MessageServices} from './message-entity';
import { AuthModule } from "src/auth/auth.module";

const entities = [
    UserEntity,
    MessageEntity
];
const providers = [
    UserServices,
    MessageServices
];
const controlers = [
    UserController,
    MessageController
];

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature(entities)
    ],
    providers: providers,
    controllers: controlers,
})
export class EntitiesModule {}