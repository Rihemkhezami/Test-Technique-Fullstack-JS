import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocumen = User & Document;


@Schema()
export class User{

    @Prop({required:true})
    fullname:string;


    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({required:true, default: Date.now() })
    createdDate: Date


}

export const UserSchema = SchemaFactory.createForClass(User);