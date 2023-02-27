import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {StoresService} from './stores.service';
import {CreateStoreDto2} from './dto/create-store2.dto';
import {UpdateStoreDto2} from './dto/update-store2.dto';
import {ApiResponse} from '@nestjs/swagger';
import {Store} from './entities/store.entity';
import {Throttle} from '@nestjs/throttler';

@Controller('v2/stores')
export class Stores2Controller {
    constructor(private readonly storesService: StoresService) {
    }

    @Post()
    @ApiResponse({
        status: 200,
        description: 'Création effectué',
    })
    @ApiResponse({
        status: 400,
        description: 'Erreur 400',
    })
    @Throttle(10, 60)
    create(@Body() createStoreDto: CreateStoreDto2) {
        const entity = this.convertDtoToEntity(createStoreDto);
        return this.storesService.create(entity);
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
    update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto2) {
        return this.storesService.update(id, updateStoreDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.storesService.remove(id);
    }

    private convertDtoToEntity(dto: CreateStoreDto2): Store {
        const store = new Store();
        store.name = dto.name;
        store.area = dto.area;
        store.city = dto.city;
        store.employees = dto.employees;
        return store;
    }
}
