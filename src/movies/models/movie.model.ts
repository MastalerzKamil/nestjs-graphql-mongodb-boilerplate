import { Field, ObjectType } from '@nestjs/graphql';
import { Character } from './character.model';

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

  @Field(() => [Character], {
    description: 'characters that take part in the movie',
  })
  characters: [Character];
}
