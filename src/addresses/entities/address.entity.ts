import {Field, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Address {
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
