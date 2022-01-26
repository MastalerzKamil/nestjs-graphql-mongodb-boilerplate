import { InputType, Field, } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateMovieInput {
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
}
