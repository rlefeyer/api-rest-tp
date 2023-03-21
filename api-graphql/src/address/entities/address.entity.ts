import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => Int, { description: 'Address ID' })
  id: number;

  @Field(() => String, { description: 'Street name' })
  street: String;
  
  @Field(() => String, { description: 'City name' })
  city: String;

  @Field(() => String, { description: 'Country name' })
  country: String;

  @Field(() => Int, { description: 'Zipcode' })
  zipcode: number;
}
