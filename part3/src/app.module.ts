import { ConfigurableModuleBuilder, Module } from '@nestjs/common';

import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(),
            MongooseModule.forRoot(process.env.MONGODB_URI),
            MoviesModule],
})
export class AppModule {}
