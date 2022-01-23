import { Injectable } from '@nestjs/common';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { InjectModel } from '@nestjs/mongoose';
import { MovieDocument, movieSchemaToken } from './schemas/movie.schema';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(movieSchemaToken)
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieInput: CreateMovieInput) {
    const newMovie = new this.movieModel(createMovieInput);
    return await newMovie.save();
  }

  async findAll() {
    return await this.movieModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: string, updateMovieInput: UpdateMovieInput) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
