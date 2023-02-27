import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  
  @Field(() => String, { description: 'Street value' })
  street: string;
  
  @Field(() => String, { description: 'City value' })
  city: string;

  @Field(() => String, { description: 'Country value' })
  country: string;

  @Field(() => Int, { description: 'Zipcode value' })
  zipcode: number;
}
