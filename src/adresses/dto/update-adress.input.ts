import { CreateAdressInput } from './create-adress.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdressInput extends PartialType(CreateAdressInput) {
  @Field(() => String, { description: 'ID de la personne' })
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