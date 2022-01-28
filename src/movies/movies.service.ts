import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument, movieSchemaToken } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { MoviesAndCount } from './types/movies-and-count';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(movieSchemaToken)
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieInput: CreateMovieInput) {
    const newMovie = new this.movieModel(createMovieInput);
    return newMovie.save();
  }

  async findAll(limit: number, offset: number): Promise<MoviesAndCount> {
    const movies = await this.movieModel
      .find()
      .skip(offset)
      .limit(limit)
      .exec();
    return { movies: movies, count: movies.length};
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findOne({ id }).exec();
  }

  async update(id: string, updateMovieInput: UpdateMovieInput): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, updateMovieInput).exec();
  }

  async remove(id: string): Promise<Movie> {
    return this.movieModel.findByIdAndDelete(id).exec();
  }
}
