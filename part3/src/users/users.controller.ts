import { Body, Controller, HttpStatus, Post, Res, Response } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/users.models';
import { UserDto } from 'src/dto/users.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService,
        private jwtService : JwtService
    ){}

    @Post('/signup')
    async   Signup(@Res() response, @Body() user: UserDto){
        console.log(user)
        const newUser = await this.usersService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Post('/signin')
    async Signin(@Res() response, @Body() user:User){
        const token = await this.usersService.Signin(user,this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }


}
