import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CharacterInput {
  @Field({ description: 'character name' })
  name: string;
}
