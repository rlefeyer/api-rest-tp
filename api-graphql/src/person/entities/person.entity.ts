import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Gender } from 'src/gender.enum';

@ObjectType()
export class Person {
  @Field(() => Int, { description: 'Id de la personne' })
  id: number;

  @Field(() => String, { description: 'Name de la personne' })
  name: String;

  @Field(() => Date, { description: 'Date de naissance de la personne' })
  birthdate: Date;

  @Field(() => Int, { description: 'Adresse de la personne' })
  addressId: number;

  @Field(() => String, { description: 'Gender de la personne' })
  gender: string;
}
