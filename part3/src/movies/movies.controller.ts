import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto } from 'src/dto/movies.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly service: MoviesService){};

    @Post()
    Add(@Body() body : MovieDto ){
        return this.service.Add(body);
    }

    @Get()
    FindAll(){
        return this.service.FindAll();
    }

    @Get("/:id")
    FindOne(@Param('id') id:string ){
        return this.service.FindOne(id);
    }

    @Put("/:id")
    Update(@Param('id') id: string, @Body() body: MovieDto){
        return this.service.Update(id,body);
    }

    @Delete("/:id")
    Delete(@Param('id') id:string ){
        return this.service.Delete(id);
    }

    @Post('/search')
  Search(@Query('key') key) {
    return this.service.Search(key);
  }



    
}
