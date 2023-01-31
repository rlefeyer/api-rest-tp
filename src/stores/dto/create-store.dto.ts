import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {

    @ApiProperty({ required: true, description: "Nom du magasin" })
    name: string;

    @ApiProperty({ required: true, description: "Superficie du magasin" })
    area: number;

    @ApiProperty({ required: true, description: "Nom de la ville" })
    city: string;

    @ApiProperty({ required: false, description: "Numéro de SIREN" })
    siren: string;
}