import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => ID, { description: 'ID of the address' })
  _id: number;

  @Field(() => String, { description: 'Street name for this address' })
  street: string;

  @Field(() => String, { description: 'City name for this address' })
  city: string;

  @Field(() => String, { description: 'Country name for this address' })
  country: string;

  @Field(() => Number, { description: 'Zipcode for this address' })
  zipcode: number;
}
