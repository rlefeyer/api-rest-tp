import { CreateAddressInput } from './create-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => Int, { description: 'ID' })
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
