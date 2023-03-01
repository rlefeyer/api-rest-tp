import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Address {

  @Field(() => ID, {description:"sheesh ID"})
  id : number;
  
  @Field(() => String, {description:"sheesh street"})
  street : String;

  @Field(() => String, {description:"sheesh city"})
  city : String;

  @Field(() => String, {description:"sheesh country"})
  country : String;

  @Field(() => Number, {description:"sheesh zipcode",nullable: true})
  zipCode : number;



}
