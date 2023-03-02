import { CreatePersonInput } from './create-person.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';


@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => String, { description: 'Id de la personne' })
  id: string;

  @Field(() => String, { description: 'Le nom de la personne' })
  name: string;

  @Field(() => Date, { description: "La date d'anniversaire de la personne" })
  birthday: Date;

  @Field(() => String, { description: 'Le genre de la personne' })
  gender: string;

  @Field(() => String, { description: 'Adresse de la personne' })
  adressId: string;
}
