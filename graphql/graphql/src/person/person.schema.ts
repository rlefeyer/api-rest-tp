
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from 'src/address/entities/address.entity';
import { genderEnum } from './type/genderEnum';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  name: string;

  @Prop()
  birthdate: Date;

  @Prop()
  address: Address;

  @Prop()
  genderEnum: genderEnum;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
