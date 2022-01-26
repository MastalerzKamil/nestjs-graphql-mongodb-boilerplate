import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const characterSchemaToken = 'Character';

export type CharacterDocument = Character & Document;

@Schema()
export class Character {
  @Prop()
  name: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
