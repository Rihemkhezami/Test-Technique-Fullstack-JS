import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class UserDto{
 
    @IsNotEmpty()
     fullname:string;

     @IsEmail()
     email: string;

    @IsNotEmpty()
    password:string;

}