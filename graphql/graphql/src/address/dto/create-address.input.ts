import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  
  @Field(() => String, {description:"sheesh street"})
  street : String;

  @Field(() => String, {description:"sheesh city"})
  city : String;

  @Field(() => String, {description:"sheesh country"})
  country : String;

  @Field(() => Number, {description:"sheesh zipcode"})
  zipCode : number;
}
