import {Field, InputType, Int} from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
    @Field(() => String, {description: 'rue'})
    street: string;

    @Field(() => String, {description: 'ville'})
    city: string;

    @Field(() => String, {description: 'pays'})
    country: string;

    @Field(() => Int, {description: 'code postal'})
    zipcode: number;

}
