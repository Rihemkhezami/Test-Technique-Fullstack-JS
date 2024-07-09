import { IsInt, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class MovieDto{
 
    @IsNotEmpty()
     title:string;

    
    description:string;


    @IsPositive()
    year:number;

    @IsNotEmpty()
    genre:string;

    @IsNotEmpty()
    director:string;
}