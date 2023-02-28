import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {

    @Field(() => String, {description: 'nom de la personne'})
    name: string;

    @Field(() => Date, {description: 'date d\'anniversaire de la personne'})
    birthday: Date;

    @Field(() => String, {description: 'genre de la personne'})
    gender: string;

    @Field(() => String, {description: 'adresse de la personne'})
    addressId: string;


}
