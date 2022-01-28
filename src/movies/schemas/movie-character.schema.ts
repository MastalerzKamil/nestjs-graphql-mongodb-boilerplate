import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const movieCharacterSchemaToken = 'MovieCharacter';

export type MovieCharacterDocument = MovieCharacter & Document;

@Schema()
export class MovieCharacter {
  @Prop()
  name: string;
}

export const MovieCharacterSchema =
  SchemaFactory.createForClass(MovieCharacter);
