import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieCharacter {
  @Field({ description: 'character name from movie' })
  name: string;
}
