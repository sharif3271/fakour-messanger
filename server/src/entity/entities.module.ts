import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserServices, UserController, UserEntity } from './user-entity';
import { MessageController, MessageEntity, MessageServices} from './message-entity';
import { ConversationServices, ConversationEntity, ConversationController} from './conversation-entity';
import { AuthModule } from "src/auth/auth.module";

const entities = [
    UserEntity,
    MessageEntity,
    ConversationEntity,
];
const providers = [
    UserServices,
    MessageServices,
    ConversationServices,
];
const controlers = [
    UserController,
    MessageController,
    ConversationController,
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