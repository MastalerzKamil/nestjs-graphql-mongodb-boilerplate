import { Test, TestingModule } from '@nestjs/testing';
import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';
import { moviesServiceMock } from './mock/moviesService.mock';
import { moviesDocArray, stubMovie, stubMovieDoc } from './stub/movie.stub';
import ConnectionArgs from '../shared/pagination/types/connection.args';

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
    it('should get first 2 movies from array with 3 movies', async () => {
      const args: ConnectionArgs = {
        first: 2,
        pagingParams: jest.fn().mockReturnValueOnce({ limit: 3, offset: 0 }),
      };
      const result = await resolver.findAll(args);
      const expectedResult = {
        page: {
          edges: [
            { cursor: expect.anything(), node: moviesDocArray[0] },
            { cursor: expect.anything(), node: moviesDocArray[1] },
          ],
          pageInfo: {
            startCursor: expect.anything(),
            endCursor: expect.anything(),
            hasPreviousPage: false,
            hasNextPage: false,
          },
        },
        pageData: { count: 2, limit: 3, offset: 0 },
      };
      expect(result).toEqual(expectedResult);
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
