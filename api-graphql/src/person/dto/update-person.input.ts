import { Gender } from 'src/gender.enum';
import { CreatePersonInput } from './create-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAddressInput } from 'src/address/dto/create-address.input';
import { Address } from 'src/address/entities/address.entity';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int, { description: 'ID' })
  id: number;

  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Date, { description: 'Birth date' })
  birthdate: Date;

  @Field(() => Int, { description: 'Address' })
  adresseId: number;

  @Field(() => String, { description: 'Gender' })
  gender: string;
}
