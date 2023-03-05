import { CreatePersonInput } from './create-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int, { description: 'Id' })
  id: number;

  @Field(() => String, { description: 'Prénom & nom' })
  prenom_nom: string;

  @Field(() => Date, { description: 'Date de naissance' })
  date_naissance: Date;

  @Field(() => Int, { description: 'Adresse' })
  adresseId: number;

  @Field(() => String, { description: 'Genre' })
  genre: string;
}
