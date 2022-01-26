import { Movie, MovieDocument } from '../schemas/movie.schema';

export const stubMovie = (
  title = 'Hobbit',
  description = 'Lorem Ipsum',
  id = 'auuid',
  year = 2004,
): Movie => ({
  title,
  id,
  description,
  year,
});

export const stubMovieDoc = (
  mock?: Partial<Movie>,
): Partial<MovieDocument> => ({
  title: mock?.title || 'Hobbit',
  year: mock?.year || 2004,
  id: mock?.id || 'auuid',
  description: mock?.description || 'Lorem Ipsum',
});

export const moviesArray = [
  stubMovie(),
  stubMovie(
    'Jak Pokochalam Gangstera',
    'Movie about polish mafia from Gdansk',
    'auuid2',
    2021,
  ),
  stubMovie('Harry Potter', 'movie about magic', 'auuid3', 2004),
];

export const moviesDocArray = [
  stubMovieDoc(),
  stubMovieDoc({
    title: 'Jak Pokochalam Gangstera',
    description: 'Movie about polish mafia from Gdansk',
    id: 'auuid2',
    year: 2021,
  }),
  stubMovieDoc({
    title: 'Harry Potter',
    description: 'movie about magic',
    id: 'auuid3',
    year: 2004,
  }),
];
