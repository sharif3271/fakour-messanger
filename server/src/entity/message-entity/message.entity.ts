import { ConversationEntity } from '../conversation-entity';
import { Column, Entity, PrimaryGeneratedColumn, Index,
    BeforeInsert, BeforeUpdate, ManyToOne } from 'typeorm';

export enum MessageType {
    file = 'FILE',
    text = 'TEXT',
    stream = 'STREAM',
    image = 'IMAGE'
}

@Entity()
export class MessageEntity {

    @PrimaryGeneratedColumn() id: string;

    @Column({
        type: 'unsigned big int',
    })
    senderPhoneNumber: number;

    @Column({
        type: 'unsigned big int',
    })
    reciverPhoneNumber: number;

    @Column({
        type: 'varchar',
        length: 16,
        default: MessageType.text
    })
    contentType: MessageType;

    @Column({
        type: 'varchar',
        length: '1000',
        nullable: true
    })
    textContent: string;

    @Column({
        type: 'boolean',
        default: false
    })
    seen: boolean;

    @Column('integer')
    createDate: number;

    @Column({type: 'integer', nullable: true})
    updateDate: number;

    @Column()
    conversationId: number;

    @ManyToOne(() => ConversationEntity, conversation => conversation.messages)
    conversation: ConversationEntity;
    
    @BeforeInsert()
    beforInsert() {
        this.createDate = (new Date()).getTime();
    }

    @BeforeUpdate()
    beforUpdate() {
        this.updateDate = (new Date()).getTime();
    }
}