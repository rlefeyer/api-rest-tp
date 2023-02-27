import { CreateAddressInput } from './create-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => Int, { description: 'Id adresse' })
  id: number;

  @Field(() => String, { description: 'Street value' })
  street: string;
  
  @Field(() => String, { description: 'City value' })
  city: string;

  @Field(() => String, { description: 'Country value' })
  country: string;

  @Field(() => Int, { description: 'Zipcode value' })
  zipcode: number;
}
