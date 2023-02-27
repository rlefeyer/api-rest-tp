import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => Int, { description: 'Id adresse' })
  id: number;

  @Field(() => String, { description: 'Street value' })
  street: String;
  
  @Field(() => String, { description: 'City value' })
  city: String;

  @Field(() => String, { description: 'Country value' })
  country: String;

  @Field(() => Int, { description: 'Zipcode value' })
  zipcode: number;
}
