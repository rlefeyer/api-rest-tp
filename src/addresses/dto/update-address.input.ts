import {CreateAddressInput} from './create-address.input';
import {Field, InputType, Int, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
    @Field(() => String, {description: 'id'})
    id: string;
    @Field(() => String, {description: 'rue'})
    street: string;

    @Field(() => String, {description: 'ville'})
    city: string;

    @Field(() => String, {description: 'pays'})
    country: string;

    @Field(() => Int, {description: 'code postal'})
    zipcode: number;

}
