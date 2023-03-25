import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field(() => String, { description: 'Street name for this address' })
  street: string;

  @Field(() => String, { description: 'City name for this address' })
  city: string;

  @Field(() => String, { description: 'Country name for this address' })
  country: string;

  @Field(() => Number, { description: 'Zipcode for this address' })
  zipcode: number;
}
