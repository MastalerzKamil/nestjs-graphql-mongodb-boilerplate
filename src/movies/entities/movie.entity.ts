import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field({ description: 'Movie Id' })
  id: string;

  @Field({ description: 'Movie title' })
  title: string;

  @Field({ description: 'description about movie', nullable: true })
  description?: string;
}

