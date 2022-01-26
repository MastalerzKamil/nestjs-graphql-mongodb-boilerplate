import { Movie, MovieDocument } from '../schemas/movie.schema';
import { Character } from '../models/character.model';

export const stubMovie = (
  title = 'Hobbit',
  description = 'Lorem Ipsum',
  id = 'auuid',
  year = 2004,
  characters = [{ name: 'test' }] as [Character],
): Movie => ({
  title,
  id,
  description,
  year,
  characters,
});

export const stubMovieDoc = (
  mock?: Partial<Movie>,
): Partial<MovieDocument> => ({
  title: mock?.title || 'Hobbit',
  year: mock?.year || 2004,
  id: mock?.id || 'auuid',
  description: mock?.description || 'Lorem Ipsum',
  characters: mock?.characters || ([{ name: 'test' }] as [Character]),
});

export const moviesArray = [
  stubMovie(),
  stubMovie(
    'Jak Pokochalam Gangstera',
    'Movie about polish mafia from Gdansk',
    'auuid2',
    2021,
    [{ name: 'test' }] as [Character],
  ),
  stubMovie('Harry Potter', 'movie about magic', 'auuid3', 2004, [{ name: 'test' }]),
];

export const moviesDocArray = [
  stubMovieDoc(),
  stubMovieDoc({
    title: 'Jak Pokochalam Gangstera',
    description: 'Movie about polish mafia from Gdansk',
    id: 'auuid2',
    year: 2021,
    characters: [{ name: 'test' }] as [Character],
  }),
  stubMovieDoc({
    title: 'Harry Potter',
    description: 'movie about magic',
    id: 'auuid3',
    year: 2004,
    characters: [{ name: 'test' }] as [Character],
  }),
];
