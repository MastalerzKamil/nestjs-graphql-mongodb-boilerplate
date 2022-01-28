import { Field, ObjectType } from '@nestjs/graphql';
import { MovieCharacter } from './movie-character.model';

@ObjectType()
export class Movie {
  @Field({ description: 'Movie Id', nullable: true })
  id?: string;

  @Field({ description: 'Movie title' })
  title: string;

  @Field({ description: 'description about movie', nullable: true })
  description?: string;

  @Field({ description: 'movie year' })
  year: number;

  @Field(() => [MovieCharacter], {
    description: 'characters that take part in the movie',
  })
  characters: [MovieCharacter];
}
