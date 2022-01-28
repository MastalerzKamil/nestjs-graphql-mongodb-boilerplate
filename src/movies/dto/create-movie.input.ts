import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { MovieCharacterInput } from './movie-character.input';

@InputType()
export class CreateMovieInput {
  @Field({ description: 'Movie Id', nullable: true })
  @IsOptional()
  id?: string;

  @Field({ description: 'Movie title' })
  @IsString()
  title: string;

  @Field({ description: 'Movie year when it was created' })
  @IsNumber()
  year: number;

  @Field({ description: 'description about movie', nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => [MovieCharacterInput], {
    description: 'characters that take part in the movie',
    nullable: true,
  })
  @IsOptional()
  characters?: [MovieCharacterInput];
}
