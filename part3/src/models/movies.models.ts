import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MovieDocumen = Movie & Document;


@Schema()
export class Movie{

    @Prop({required:true})
    title:string;

    
    description:string;

    @Prop({required:true})
    year:number;

    @Prop({required:true})
    genre:string;

    @Prop({required:true})
    director:string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);