import {CreatePersonInput} from './create-person.input';
import {Field, InputType, PartialType} from '@nestjs/graphql';
import {Gender} from "../gender.enum";
import {CreateAddressInput} from "../../addresses/dto/create-address.input";

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
    @Field(() => String, {description: 'id de la personne'})
    id: string;
    @Field(() => String, {description: 'nom de la personne'})
    name: string;

    @Field(() => Date, {description: 'date d\'anniversaire de la personne'})
    birthday: Date;

    @Field(() => String, {description: 'genre de la personne'})
    gender: Gender;

    @Field(() => CreateAddressInput, {description: 'adresse de la personne'})
    address: CreateAddressInput;
}
