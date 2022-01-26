import { Test, TestingModule } from '@nestjs/testing';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';
import { moviesServiceMock } from './mock/moviesService.mock';
import { moviesDocArray, stubMovie, stubMovieDoc } from './stub/movie.stub';

describe('MoviesResolver', () => {
  let resolver: MoviesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesResolver,
        { provide: MoviesService, useFactory: () => moviesServiceMock },
      ],
    }).compile();

    resolver = module.get<MoviesResolver>(MoviesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createMovie', () => {
    it('should get movie after creation', async () => {
      const result = await resolver.createMovie(stubMovie());
      expect(result).toEqual(stubMovieDoc());
    });
  });

  describe('findAll', () => {
    it('should get movies array', async () => {
      const result = await resolver.findAll();
      expect(result).toEqual(moviesDocArray);
    });
  });

  describe('findOne', () => {
    it('should get movie by id', async () => {
      const result = await resolver.findOne('auuid');
      expect(result).toEqual(stubMovieDoc());
    });
  });

  describe('updateMovie', () => {
    it('should update movie by id', async () => {
      const result = await resolver.updateMovie(stubMovie());
      expect(result).toEqual(stubMovieDoc());
    });
  });

  describe('removeMovie', () => {
    it('should update movie by id', async () => {
      const result = await resolver.removeMovie('auuid');
      expect(result).toEqual(stubMovieDoc());
    });
  });
});
