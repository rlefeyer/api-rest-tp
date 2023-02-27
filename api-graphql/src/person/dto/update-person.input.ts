import { Gender } from 'src/gender.enum';
import { CreatePersonInput } from './create-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAddressInput } from 'src/address/dto/create-address.input';
import { Address } from 'src/address/entities/address.entity';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int, { description: 'Id de la personne' })
  id: number;

  @Field(() => String, { description: 'Name de la personne' })
  name: string;

  @Field(() => Date, { description: 'Date de naissance de la personne' })
  birthdate: Date;

  @Field(() => Int, { description: 'Adresse de la personne' })
  adresseId: number;

  @Field(() => String, { description: 'Gender de la personne' })
  gender: string;
}
