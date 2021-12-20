import { Column, Entity, PrimaryGeneratedColumn, Index, BeforeInsert } from 'typeorm';
import { hashPassword } from './utils';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Index('phoneNumber-index')
    @Column({
        unique: true,
        type: 'unsigned big int',
    })
    phoneNumber: number;

    @Column({
        type: 'varchar'
    })
    firstName: string;

    @Column({
        type: 'varchar'
    })
    lastName: string;

    @Column({
        type: 'varchar'
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 1000,
        nullable: true
    })
    message: string | null;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hashPassword(this.password);
    }    
}