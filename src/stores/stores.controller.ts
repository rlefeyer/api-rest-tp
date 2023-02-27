import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDtoV1 } from './dto/create-store.dto';
import { UpdateStoreDtoV1 } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Throttle(10, 60)
@Controller('v1/stores')
export class StoresControllerV1 {
  constructor(private readonly storesService: StoresService) {}

  private convertToEntityV1(obj: CreateStoreDtoV1): Store {
    const store = new Store();
    store.nom = obj.nom;
    store.superficie = obj.superficie;
    store.ville = obj.ville;
    store.siren = obj.siren;
    return store;
  }

  private updateToEntityV1(obj: UpdateStoreDtoV1): Store {
    const store = new Store();
    store.nom = obj.nom;
    store.superficie = obj.superficie;
    store.ville = obj.ville;
    store.siren = obj.siren;
    return store;
  }
  @Post()
  @ApiCreatedResponse({ description: 'Ajout du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  create(@Body() createStoreDto: CreateStoreDtoV1) {
    return this.storesService.create(this.convertToEntityV1(createStoreDto));
  }

  @Get()
  @ApiOkResponse({ description: 'Retour des stores avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Retour du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Mis à jour partielle du store avec succès.',
  })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDtoV1) {
    return this.storesService.update(id, this.updateToEntityV1(updateStoreDto));
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Suppression du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
