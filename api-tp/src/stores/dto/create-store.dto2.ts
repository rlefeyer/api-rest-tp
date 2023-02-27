import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from 'src/articles/dto/create-article.dto';
import { Injectable } from '@nestjs/common/decorators';
import { Store } from '../entities/store.entity';


export class CreateStoreDto2 {
    
    @ApiProperty({ required: true, description: "Nom du store" })
    name: string;

    @ApiProperty({ required: true, description: "Adresse du store" })
    adress: string;

    @ApiProperty({ required: true, description: "Surperficie du store" })
    superficie: string;

    @ApiProperty({ required: true, description: "Employé du store" })
    employe: string;

    // @ApiProperty({ required: false, description: "Liste d'articles du store" })
    // articles: CreateArticleDto[];

    public convertToEntity(): Store {
        const store = new Store();
        store.name = this.name;
        store.superficie = this.superficie;
        store.adress = this.adress;
        store.employe = this.employe
        return store;
      }
}


