import { ApiProperty } from '@nestjs/swagger';
import { Store } from '../entities/store.entity';

export class CreateStoreDto {
  @ApiProperty({ required: true, description: 'Le nom de votre boutique' })
  nom: string;

  @ApiProperty({ required: true, description: 'La superficie en m2' })
  superficie: number;

  @ApiProperty({
    required: true,
    description: 'La ville où est située la boutique',
  })
  ville: string;

  @ApiProperty({
    required: false,
    description: 'le numéro de SIREN de votre boutique (facultatif)',
  })
  siren: number;

  public convertToEntity(): Store {
    const store = new Store();
    store.nom = this.nom;
    store.superficie = this.superficie;
    store.ville = this.ville;
    store.siren = this.siren;
    return store;
  }
}
