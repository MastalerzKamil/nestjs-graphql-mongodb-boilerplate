import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Optional } from '@nestjs/common';
import { Character, CharacterSchema } from './character.schema';

export const movieSchemaToken = 'Movie';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Optional()
  id?: string;

  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  description?: string;

  @Prop({ type: [CharacterSchema], default: [] })
  characters?: [Character];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
