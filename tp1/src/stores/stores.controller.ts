import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiBearerAuth, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger/dist/decorators';
import { Store } from './entities/store.entity';
import { CreateStoreDtoV2 } from './dto/create-storev2.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('stores')
@Controller()
export class StoresController {
  constructor(private readonly storesService: StoresService) {}
  
  public convertToEntityCreate(createStoreDto?: CreateStoreDto,createStoreDtoV2?:CreateStoreDtoV2): Store {
    let store = new Store();
    let obj = createStoreDtoV2 || createStoreDto;
    store.name = obj.name;
    store.description = obj.description;
    store.ville = obj.ville;
    store.superficie = obj.superficie;
    if(createStoreDtoV2)
    {
      store.employe = createStoreDtoV2.employe;
    }
    else if(createStoreDto!=null)
    {
      store.siren = createStoreDto.siren;
    }
   
    return store;
  }
 

  public convertToEntityUpdate(updateStoreDto: UpdateStoreDto): Store {
    let store =new Store();
    store.name = updateStoreDto.name;
    store.description = updateStoreDto.description;
    store.ville = updateStoreDto.ville;
    store.superficie = updateStoreDto.superficie;
    store.siren = updateStoreDto.siren;
    return store;
  }
  @Post("V1/stores")
  create(@Body() createStoreDto: CreateStoreDto) {
    
    return this.storesService.create(this.convertToEntityCreate(createStoreDto));
  } 
  @Post("V2/stores")
  create2(@Body() createStoreDtoV2: CreateStoreDtoV2) {
    return this.storesService.create2(this.convertToEntityCreate(null,createStoreDtoV2));
  }
  

  
  @Get("/stores")
  @ApiResponse({ status: 200, description: 'OK.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  findAll() {
    return this.storesService.findAll();
  }

  @Get('/stores/:id')
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(id);
  }
  //get all the articles of a project by project id 
  @Get('/stores/:id/articles')
  findAllArticles(@Param('id') id: string) {
    return this.storesService.findAllArticles(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(id, this.convertToEntityUpdate(updateStoreDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
