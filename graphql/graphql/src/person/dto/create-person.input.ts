import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { CreateAddressInput } from 'src/address/dto/create-address.input';
import { Address } from 'src/address/entities/address.entity';
import { genderEnum } from '../type/genderEnum';

@InputType()
export class CreatePersonInput {
  @Field(() => String, {description:"sheesh name"})
  name : String;

  @Field(() => Date, {description:"sheesh date"})
  birthdate : Date;

  @Field(() => CreateAddressInput, {description:"sheesh email"})  
  address : Address;

  @Field(() => genderEnum, {description:"sheesh enum"})
  genderEnum : genderEnum;
}
