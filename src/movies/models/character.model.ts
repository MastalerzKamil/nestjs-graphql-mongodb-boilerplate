import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Character {
  @Field({ description: 'character name' })
  name: string;
}
