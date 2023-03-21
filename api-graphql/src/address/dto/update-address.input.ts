import { CreateAddressInput } from './create-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => Int, { description: 'Address ID' })
  id: number;

  @Field(() => String, { description: 'Street name' })
  street: string;
  
  @Field(() => String, { description: 'City name' })
  city: string;

  @Field(() => String, { description: 'Country name' })
  country: string;

  @Field(() => Int, { description: 'Zipcode' })
  zipcode: number;
}
