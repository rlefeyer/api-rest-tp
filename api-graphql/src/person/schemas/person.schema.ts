import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { GenderEnum } from '../type/genderEnum';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  birthdate: Date;

  @Prop({
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  })
  address_id: number;

  @Prop({ required: false })
  gender: GenderEnum;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
