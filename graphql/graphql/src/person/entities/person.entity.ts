import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { type } from 'os';
import { Address } from 'src/address/entities/address.entity';
import { genderEnum } from '../type/genderEnum';

@ObjectType()
export class Person {
  @Field(() => ID, {description:"sheesh ID"})
  id : number;

  @Field(() => String, {description:"sheesh name"})
  name : String;

  @Field(() => Date, {description:"sheesh date"})
  birthdate : Date;

  @Field(() => Address, {description:"sheesh email"})  
  address : Address;

  @Field(() => genderEnum, {description:"sheesh enum"})
  genderEnum : genderEnum;


}
