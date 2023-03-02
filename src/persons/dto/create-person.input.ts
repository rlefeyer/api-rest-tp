import { InputType, Field } from '@nestjs/graphql';
import { Gender } from '../../gender/gender.enum';



@InputType()
export class CreatePersonInput {

  @Field(() => String, { description: 'Le nom de la personne' })
  name: string;

  @Field(() => Date, { description: 'La date anniversaire de la personne' })
  birthday: Date;

  @Field(() => String, { description: 'Adresse de la personne' })
  adressId: string;
  
  @Field(() => String, { description: 'Le genre de la personne' })
  gender: string;

}
