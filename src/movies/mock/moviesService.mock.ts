import { moviesDocArray, stubMovieDoc } from '../stub/movie.stub';

export const moviesServiceMock = {
  create: jest.fn().mockReturnValue(stubMovieDoc()),
  findAll: jest.fn().mockReturnValue(moviesDocArray),
  findOne: jest.fn().mockReturnValue(stubMovieDoc()),
  update: jest.fn().mockReturnValue(stubMovieDoc()),
  remove: jest.fn().mockReturnValue(stubMovieDoc()),
};
