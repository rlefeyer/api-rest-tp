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
import { CreateStoreDtoV2 } from './dto/create-storev2.dto';
import { UpdateStoreDtoV2 } from './dto/update-storev2.dto';
import { Store } from './entities/store.entity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Throttle(10, 60)
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
  @ApiCreatedResponse({ description: 'Ajout du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  @Throttle(10, 60)
  create(@Body() createStoreDto: CreateStoreDtoV2) {
    return this.storesService.create(this.convertToEntityV2(createStoreDto));
  }
  @Get()
  @ApiCreatedResponse({ description: 'Retour des stores avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ description: 'Retour du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    description: 'Mis à jour partielle du store avec succès.',
  })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDtoV2) {
    return this.storesService.update(id, this.updateToEntityV2(updateStoreDto));
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Suppression du store avec succès.' })
  @ApiUnauthorizedResponse({ description: 'Accès refusé.' })
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
