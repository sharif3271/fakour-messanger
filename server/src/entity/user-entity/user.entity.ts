import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Column({
        unique: true,
        type: 'double',
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

    @PrimaryColumn({length: 64})
    token: string;


    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }    
}