import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

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
}
