import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person } from './entities/person.entity';
import { PersonDocument } from './schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(createPersonInput: CreatePersonInput) {
    return this.personModel.create(createPersonInput);
  }

  findAll() {
    return this.personModel.find();
  }

  findOne(id: number) {
    return this.personModel.findById(id);
  }

  update(id: number, updatePersonInput: UpdatePersonInput) {
    return this.personModel.findByIdAndUpdate(id, updatePersonInput);
  }

  remove(id: number) {
    return this.personModel.findByIdAndRemove(id);
  }
}
