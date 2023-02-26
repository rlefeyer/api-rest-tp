import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto2 extends PartialType(CreateStoreDto) {
    name?: string;
    area?: number;
    city?: string;
    employees?: string;
}
