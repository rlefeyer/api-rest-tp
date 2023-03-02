import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Adress {

  @Field(() => String, {description: 'id de adresse de la personne'})
    id: string;

  @Field(() => String, {description: 'La rue de la personne'})
    street: string;

    @Field(() => String, {description: 'La ville de la personne'})
    city: string;

    @Field(() => String, {description: 'Le pays de la personne'})
    country: string;

    @Field(() => Int, {description: 'Le code postal de la personne'})
    zipcode: number;
}
