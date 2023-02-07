import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDtoV2 } from './dto/create-storeV2.dto';
import { UpdateStoreDtoV2 } from './dto/update-storeV2.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Store } from './entities/store.entity';
import { Throttle } from '@nestjs/throttler';

@Controller('v2/stores')
export class StoresControllerV2 {
  constructor(private readonly storesService: StoresService) {}

  private convertToEntityV2(obj: CreateStoreDtoV2): Store {
    const store = new Store();
    store.nom = obj.nom;
    store.superficie = obj.superficie;
    store.ville = obj.ville;
    store.employe = obj.employe;
    return store;
  }

  private updateToEntityV2(obj: UpdateStoreDtoV2): Store {
    const store = new Store();
    store.nom = obj.nom;
    store.superficie = obj.superficie;
    store.ville = obj.ville;
    store.employe = obj.employe;
    return store;
  }
  @Post()
  @ApiResponse({
    status: 403,
    description: "Erreur 403 Forbidden : vous n'avez pas les accès nécessaires",
  })
  @Throttle(2, 60)
  create(@Body() createStoreDto: CreateStoreDtoV2) {
    return this.storesService.create(this.convertToEntityV2(createStoreDto));
  }
  @Get()
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDtoV2) {
    return this.storesService.update(id, this.updateToEntityV2(updateStoreDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
