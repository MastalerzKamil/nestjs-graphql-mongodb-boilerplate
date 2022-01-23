import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const movieSchemaToken = 'Movie';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  description: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
