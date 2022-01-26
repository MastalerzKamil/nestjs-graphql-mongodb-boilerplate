import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { DBConnections } from '../config/db-connections';
import { Movie } from './models/movie.model';
import { MovieSchema } from './schemas/movie.schema';
import { Character, CharacterSchema } from "./schemas/character.schema";

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Movie.name, schema: MovieSchema }, { name: Character.name, schema: CharacterSchema}],
      DBConnections.moviesApp,
    ),
  ],
  providers: [MoviesResolver, MoviesService],
})
export class MoviesModule {}
