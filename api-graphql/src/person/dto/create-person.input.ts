import { InputType, Field, ID } from '@nestjs/graphql';
import { GenderEnum } from '../type/genderEnum';

@InputType()
export class CreatePersonInput {
  @Field(() => String, { description: 'Name of the person' })
  name: string;

  @Field(() => Date, { description: 'Birthdate' })
  birthdate: Date;

  @Field(() => ID, { description: 'Address ID', nullable: true })
  address_id: number;

  @Field(() => GenderEnum, { description: 'Gender', nullable: true })
  gender: GenderEnum;
}
