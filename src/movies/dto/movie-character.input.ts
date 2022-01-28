import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieCharacterInput {
  @Field({ description: 'character name' })
  name: string;
}
