import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocumen } from 'src/models/users.models';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/users.dto';
import { JwtService } from '@nestjs/jwt';
import { emit } from 'process';



@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocumen>){}


    async signup(user:UserDto):Promise<UserDto>{
        const salt=await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password,salt);
        const reqBody = {
            fullname:user.fullname,
            email:user.email,
            password:hash
        }

        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }

    async Signin(user:User,jwt:JwtService):Promise<any>{
        const foundUser = await this.userModel.findOne({email:user.email}).exec();
        if(foundUser){
            const {password} = foundUser;
            if(bcrypt.compare(user.password,password)){
                const payload = {email : user.email};
                return{
                    token:jwt.sign(payload),
                };
            }
            return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        return new HttpException('Incorrect username or password',HttpStatus.UNAUTHORIZED)
    }

    async getOne(email): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }

}
