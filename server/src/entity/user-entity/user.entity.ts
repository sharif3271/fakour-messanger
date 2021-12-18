import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, BeforeInsert } from 'typeorm';
import { hashPassword } from './utils';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Column({
        unique: true,
        type: 'unsigned big int',
        nullable: false,
    })
    phoneNumber: number;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    firstName: string;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    lastName: string;

    @Column({
        nullable: false,
        type: 'varchar'
    })
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await hashPassword(this.password);
    }    
}