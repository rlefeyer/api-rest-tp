import { CreatePersonInput } from './create-person.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => ID)
  id: number;
}
