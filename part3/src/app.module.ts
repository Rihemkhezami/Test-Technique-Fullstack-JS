import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { isAuthenticated } from './app.middleware';
import { UsersController } from './users/users.controller';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MoviesModule,
    UsersModule,
    JwtModule.register({
      secret: 'jwt_secret_key', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .forRoutes(MoviesController);
  }
}
