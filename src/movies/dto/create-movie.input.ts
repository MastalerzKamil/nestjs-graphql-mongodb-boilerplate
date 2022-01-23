import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMovieInput {
  @Field({ description: 'Movie Id' })
  id: string;

  @Field({ description: 'Movie title' })
  title: string;

  @Field({ description: 'description about movie', nullable: true })
  description?: string;
}
