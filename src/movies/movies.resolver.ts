import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './models/movie.model';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { BadRequestException } from '@nestjs/common';
import ConnectionArgs from '../shared/pagination/types/connection.args';
import AllMoviesResponse from './dto/all-movies.response';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  async createMovie(
    @Args('createMovieInput') createMovieInput: CreateMovieInput,
  ) {
    try {
      return await this.moviesService.create(createMovieInput);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => AllMoviesResponse, { name: 'movies' })
  async findAll(@Args() args: ConnectionArgs): Promise<AllMoviesResponse> {
    const { limit, offset } = args.pagingParams();
    try {
      const { movies, count } = await this.moviesService.findAll(limit, offset);
      const page = connectionFromArraySlice(movies, args, {
        arrayLength: count,
        sliceStart: offset || 0,
      });
      return { page, pageData: { count, limit, offset } };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Query(() => Movie, { name: 'movie' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.moviesService.findOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => Movie)
  async updateMovie(
    @Args('updateMovieInput') updateMovieInput: UpdateMovieInput,
  ) {
    try {
      return await this.moviesService.update(
        updateMovieInput.id,
        updateMovieInput,
      );
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Mutation(() => Movie)
  async removeMovie(@Args('id', { type: () => String }) id: string) {
    try {
      return await this.moviesService.remove(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
