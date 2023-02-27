import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStatusDto } from 'src/status/dto/create-status.dto';
import { UpdateStatusDto } from 'src/status/dto/update-status.dto';
import { Status } from 'src/status/entities/status.entity';
import { StatusService } from 'src/status/status.service';

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => [Status])
  async statuses() {
    return this.statusService.findAll();
  }

  @Query(() => Status)
  async status(@Args('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @Mutation(() => Status)
  async createStatus(@Args('status') status: CreateStatusDto) {
    return this.statusService.create(status);
  }

  @Mutation(() => Status)
  async updateStatus(
    @Args('id') id: string,
    @Args('status') status: UpdateStatusDto,
  ) {
    return this.statusService.update(+id, status);
  }

  @Mutation(() => Status)
  async deleteStatus(@Args('id') id: string) {
    return this.statusService.remove(+id);
  }
}
