import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  
  @Field(() => String, { description: 'Street name' })
  street: string;
  
  @Field(() => String, { description: 'City name' })
  city: string;

  @Field(() => String, { description: 'Country name' })
  country: string;

  @Field(() => Int, { description: 'Zipcode' })
  zipcode: number;
}
