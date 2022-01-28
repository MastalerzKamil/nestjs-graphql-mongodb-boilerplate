import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MovieDocument, movieSchemaToken } from './schemas/movie.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { moviesDocArray, stubMovie, stubMovieDoc } from './stub/movie.stub';

describe('MoviesService', () => {
  let service: MoviesService;
  let model: Model<MovieDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getModelToken(movieSchemaToken),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            findByIdAndDelete: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    model = module.get<Model<MovieDocument>>(getModelToken(movieSchemaToken));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('finding all movies', () => {
    it('should return oly first 2 movies with counts from database with 3 movies', async () => {
      jest.spyOn(model, 'find').mockReturnValue({
        skip: jest.fn().mockReturnValue({
          limit: jest.fn().mockReturnValue({
            exec: jest
              .fn()
              .mockResolvedValueOnce([moviesDocArray[0], moviesDocArray[1]]),
          }),
        }),
      } as any);

      const movies = await service.findAll(2, 0);
      const expectedResult = {
        movies: [moviesDocArray[0], moviesDocArray[1]],
        count: 2,
      };
      expect(movies).toEqual(expectedResult);
    });
  });

  describe('find by id movie', () => {
    it('should find movies by id', async () => {
      jest.spyOn(model, 'findOne').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(stubMovie()),
      } as any);

      const movie = await service.findOne('auuid');
      expect(movie).toEqual(stubMovieDoc());
    });
  });

  describe('update by id movie', () => {
    it('should find movies by id', async () => {
      jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(stubMovie()),
      } as any);

      const updatedMovie = {
        ...stubMovieDoc(),
        title: 'Kevin Alone in the Home',
      };
      const movie = await service.update('auuid', updatedMovie);
      expect(movie).toEqual(stubMovieDoc());
    });
  });

  describe('remove by id movie', () => {
    it('should find movies by id', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(stubMovie()),
      } as any);

      const movie = await service.remove('auuid');
      expect(movie).toEqual(stubMovieDoc());
    });
  });
});
