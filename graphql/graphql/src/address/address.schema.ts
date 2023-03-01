
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type AddressDocument = HydratedDocument<Address>;

@Schema()
export class Address {
  @Prop()
  street: string;

    @Prop()
    city: string;

    @Prop()
    country: string;

    @Prop({required: false})
    zipCode: number;

}

export const AddressSchema = SchemaFactory.createForClass(Address);
