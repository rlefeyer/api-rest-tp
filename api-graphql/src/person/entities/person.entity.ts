import { ObjectType, Field, ID } from '@nestjs/graphql';
import { GenderEnum } from '../type/genderEnum';

@ObjectType()
export class Person {
  @Field(() => ID, { description: 'ID of the person' })
  _id: number;

  @Field(() => String, { description: 'Name of the person' })
  name: string;

  @Field(() => Date, { description: 'Birthdate' })
  birthdate: Date;

  @Field(() => ID, { description: 'Address id', nullable: true })
  address_id: number;

  @Field(() => GenderEnum, { description: 'Gender', nullable: true })
  gender: GenderEnum;
}
