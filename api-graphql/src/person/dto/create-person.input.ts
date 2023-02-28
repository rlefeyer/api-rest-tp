import { InputType, Int, Field } from '@nestjs/graphql';
import { Address } from '@prisma/client';
import { Gender } from 'src/gender.enum';

@InputType()
export class CreatePersonInput {
  @Field(() => String, { description: 'Name' })
  name: string;

  @Field(() => Date, { description: 'Birth date' })
  birthdate: Date;

  @Field(() => Int, { description: 'Address' })
  addressId: number;

  @Field(() => String, { description: 'Gender' })
  gender: string;
}
