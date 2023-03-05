import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(() => Int, { description: 'Id' })
  id: number;

  @Field(() => String, { description: 'Numéro et nom de rue' })
  numero_rue: string;

  @Field(() => String, { description: 'Ville' })
  ville: string;

  @Field(() => String, { description: 'Pays' })
  pays: string;

  @Field(() => Int, { description: 'Code postal' })
  code_postal: number;
}
