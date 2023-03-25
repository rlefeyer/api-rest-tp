import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './entities/person.entity';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Mutation(() => Person)
  createPerson(
    @Args('createPersonInput') createPersonInput: CreatePersonInput,
  ) {
    return this.personService.create(createPersonInput);
  }

  @Query(() => [Person], { name: 'allPersons' })
  findAll() {
    return this.personService.findAll();
  }

  @Query(() => Person, { name: 'getPerson' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.personService.findOne(id);
  }

  @Mutation(() => Person)
  updatePerson(
    @Args('updatePersonInput') updatePersonInput: UpdatePersonInput,
  ) {
    return this.personService.update(updatePersonInput.id, updatePersonInput);
  }

  @Mutation(() => Person)
  removePerson(@Args('id', { type: () => ID }) id: number) {
    return this.personService.remove(id);
  }
}
