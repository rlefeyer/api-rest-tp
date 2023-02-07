import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto2 {  
    @ApiProperty({ required: true, description: "nom du magasin" })
    name: string;
  
    @ApiProperty({ required: true, description: "superficie du magasin" })
    area: number;
  
    @ApiProperty({ required: true, description: "ville où se situe le magasin" })
    city: string;

    @ApiProperty({ required: true, description: "nombre d'employés dans l'entreprise" })
    employees: number;
}




