import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Gender } from 'src/gender.enum';

@ObjectType()
export class Person {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: 'Name' })
  name: String;

  @Field(() => Date, { description: 'Birthdate' })
  birthdate: Date;

  @Field(() => Int, { description: 'Address' })
  addressId: number;

  @Field(() => String, { description: 'Gender' })
  gender: string;
}
