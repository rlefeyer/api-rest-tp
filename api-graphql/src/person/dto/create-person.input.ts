import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field(() => String, { description: 'Prénom et nom' })
  prenom_nom: string;

  @Field(() => Date, { description: 'Date de naissance' })
  date_naissance: Date;

  @Field(() => Int, { description: 'Adresse' })
  adresseId: number;

  @Field(() => String, { description: 'Genre' })
  genre: string;
}
