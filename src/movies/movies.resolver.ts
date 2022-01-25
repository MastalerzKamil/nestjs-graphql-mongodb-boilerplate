import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MoviesService } from './movies.service';
import { Movie } from './models/movie.model';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';
import { BadRequestException } from '@nestjs/common';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Mutation(() => Movie)
  async createMovie(
    @Args('createMovieInput') createMovieInput: CreateMovieInput,
  ) {
    return await this.moviesService.create(createMovieInput).catch((error) => {
      throw new BadRequestException(error);
    });
  }

  @Query(() => [Movie], { name: 'movies' })
  async findAll() {
    return await this.moviesService.findAll().catch((error) => {
      throw new BadRequestException(error);
    });
  }

  @Query(() => Movie, { name: 'movie' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    return await this.moviesService.findOne(id);
  }

  @Mutation(() => Movie)
  async updateMovie(
    @Args('updateMovieInput') updateMovieInput: UpdateMovieInput,
  ) {
    return await this.moviesService.update(
      updateMovieInput.id,
      updateMovieInput,
    );
  }

  @Mutation(() => Movie)
  async removeMovie(@Args('id', { type: () => String }) id: string) {
    return await this.moviesService.remove(id);
  }
}
