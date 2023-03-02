import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class Person {
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
