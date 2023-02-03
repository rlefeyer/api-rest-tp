import { PartialType } from '@nestjs/mapped-types';
import { CreateStore2Dto } from './create-store2.dto';

export class UpdateStore2Dto extends PartialType(CreateStore2Dto) {
    name?: string;
    area?: number;
    city?: string;
    employees?: number;
}