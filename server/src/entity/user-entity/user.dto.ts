import { IsNotEmpty,  } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty() firstName: string;
    @IsNotEmpty() lastName: string;
    @IsNotEmpty() password: string;
    @IsNotEmpty() phoneNumber: number;
}

export class UserDto {}