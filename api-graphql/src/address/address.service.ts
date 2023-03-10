import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';
import { AddressDocument } from './schemas/address.schema';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  create(createAddressInput: CreateAddressInput) {
    return this.addressModel.create(createAddressInput);
  }

  findAll() {
    return this.addressModel.find();
  }

  findOne(id: number) {
    return this.addressModel.findById(id);
  }

  update(id: number, updateAddressInput: UpdateAddressInput) {
    return this.addressModel.findByIdAndUpdate(id, updateAddressInput);
  }

  remove(id: number) {
    return this.addressModel.findByIdAndRemove(id);
  }
}
