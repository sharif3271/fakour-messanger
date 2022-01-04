import { Column, Entity, PrimaryGeneratedColumn, Index, ManyToMany,
    PrimaryColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, OneToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../user-entity';
import { MessageEntity } from '../message-entity';

@Entity()
export class ConversationEntity {

    @PrimaryGeneratedColumn() id: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    name: string;

    @Column({
        type: 'boolean',
        default: false
    })
    isGroupConversation: boolean;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn({nullable: true})
    updateDate: Date;

    @ManyToMany(() => UserEntity, userEntity => userEntity.conversations)
    users: UserEntity[];

    @OneToMany(() => MessageEntity, message => message.conversation)
    @JoinTable()
    messages: MessageEntity[];

    @BeforeUpdate()
    beforeUpdate() {
        if (this.users.length > 1 && !this.isGroupConversation) {
            this.isGroupConversation = true;
        }
    }

}