import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDocument } from './address.schema';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(@InjectModel(Address.name) private addressModel:Model<AddressDocument>) {}

  create(createAddressInput: CreateAddressInput) {
    const createdAddress = new this.addressModel(createAddressInput);
    return createdAddress.save();
  }

  findAll() {
    const addresses = this.addressModel.find().exec();
    return addresses;
  }

  findOne(id: number) {
    return this.addressModel.findById(id);
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return this.addressModel.findByIdAndUpdate(id, updateAddressInput)
  }

  remove(id: number) {
    return this.addressModel.findByIdAndDelete(id);
  }
}
