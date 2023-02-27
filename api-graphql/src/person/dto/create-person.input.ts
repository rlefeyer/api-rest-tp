import { InputType, Int, Field } from '@nestjs/graphql';
import { Address } from '@prisma/client';
import { Gender } from 'src/gender.enum';

@InputType()
export class CreatePersonInput {
  @Field(() => String, { description: 'Name de la personne' })
  name: string;

  @Field(() => Date, { description: 'Date de naissance de la personne' })
  birthdate: Date;

  @Field(() => Int, { description: 'Adresse de la personne' })
  addressId: number;

  @Field(() => String, { description: 'Gender de la personne' })
  gender: string;
}
