import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieDto } from 'src/dto/movies.dto';
import { Movie, MovieDocumen } from 'src/models/movies.models';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel : Model<MovieDocumen>){}

    Add(body : MovieDto){
        return this.movieModel.create(body);
    }

    FindAll(){
        return this.movieModel.find();
    }

    FindOne(id: string){
        return this.movieModel.findOne({ _id: id });
    }

    Update(id: string, body: MovieDto){
        return this.movieModel.findByIdAndUpdate(
            { _id: id },
            { $set: body },
            { new: true },
          );
    }

    Delete(id : string){
        return this.movieModel.deleteOne({ _id: id });
    }

    Search(key: string) {
        const keyword = key
          ? {
              $or: [
                { title: { $regex: key, $options: 'i' } },
              ],
            }
          : {};
        return this.movieModel.find(keyword);
      }

}
