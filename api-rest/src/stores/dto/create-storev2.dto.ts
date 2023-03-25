import { ApiProperty } from '@nestjs/swagger';
import { Store } from '../entities/store.entity';

export class CreateStoreDtoV2 {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  ville: string;
  @ApiProperty({ required: true })
  superficie: number;
  @ApiProperty({ required: false })
  employe: string;
  @ApiProperty({ required: false })
  description: string;

  /*public convertToEntity(): Store {
        const store = new Store();
        store.name = this.name;
        store.description = this.description;
        store.ville = this.ville;
        store.superficie = this.superficie;
        store.siren = this.siren;
    
        return store;
      }*/
}
