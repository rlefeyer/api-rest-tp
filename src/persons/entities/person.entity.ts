import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Person {
    @Field(() => String, {description: 'id de la personne'})
    id: string;
    @Field(() => String, {description: 'nom de la personne'})
    name: string;

    @Field(() => Date, {description: 'date d\'anniversaire de la personne'})
    birthday: Date;

    @Field(() => String, {description: 'genre de la personne'})
    gender: string;

    @Field(() => String, {description: 'adresse de la personne'})
    addressId: string;
}
