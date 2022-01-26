import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CharacterInput } from './character.input';

@InputType()
export class UpdateMovieInput {
  @Field({ description: 'Movie Id', nullable: true })
  @IsOptional()
  id?: string;

  @Field({ description: 'Movie title' })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ description: 'Movie year when it was created' })
  @IsNumber()
  @IsOptional()
  year?: number;

  @Field({ description: 'description about movie', nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field(() => [CharacterInput], {
    description: 'characters that take part in the movie',
    nullable: true,
  })
  @IsOptional()
  characters?: [CharacterInput];
}
