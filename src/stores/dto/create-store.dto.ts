import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {  
    @ApiProperty({ required: true, description: "nom du magasin" })
    name: string;
  
    @ApiProperty({ required: true, description: "superficie du magasin" })
    area: number;
  
    @ApiProperty({ required: true, description: "ville où se situe le magasin" })
    city: string;
  
    @ApiProperty({ required: false, description: "siren du magasin" })
    siren: string;    
}

