import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from 'src/articles/dto/create-article.dto';
import { Store } from '../entities/store.entity';
import { Injectable } from '@nestjs/common/decorators';


export class CreateStoreDto {
    
    @ApiProperty({ required: true, description: "Nom du store" })
    name: string;

    @ApiProperty({ required: true, description: "Adresse du store" })
    adress: string;

    @ApiProperty({ required: true, description: "Numéro de siren du store" })
    siren: string;

    @ApiProperty({ required: true, description: "Surperficie du store" })
    superficie: string;

    // @ApiProperty({ required: false, description: "Liste d'articles du store" })
    // articles: CreateArticleDto[];

    public convertToEntity(): Store {
        const store = new Store();
        store.name = this.name;
        store.superficie = this.superficie;
        store.adress = this.adress;
        store.siren = this.siren;
        return store;
      }
}


