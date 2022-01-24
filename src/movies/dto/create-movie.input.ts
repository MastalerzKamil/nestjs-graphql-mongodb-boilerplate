import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateMovieInput {
  @Field({ description: 'Movie Id', nullable: true })
  id?: string;

  @Field({ description: 'Movie title' })
  @IsString()
  title: string;

  @Field({ description: 'Movie year when it was created' })
  @IsNumber()
  year: number;

  @Field({ description: 'description about movie', nullable: true })
  @IsString()
  description?: string;
}
