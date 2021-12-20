import { Column, Entity, PrimaryGeneratedColumn, Index,
    PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum MessageType {
    file = 'FILE',
    text = 'TEXT',
    stream = 'STREAM',
    image = 'IMAGE'
}

@Entity()
export class MessageEntity {

    @PrimaryGeneratedColumn() id: string;

    @Index('sender-phoneNumber-index')
    @Column({
        unique: true,
        type: 'unsigned big int',
    })
    senderPhoneNumber: number;

    @Index('reciver-phoneNumber-index')
    @Column({
        unique: true,
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

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn({nullable: true})
    updateDate: Date;   
}