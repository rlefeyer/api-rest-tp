import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
    @ApiProperty({ required: true})
    name: string;
    @ApiProperty({ required: true})
    ville: string;
    @ApiProperty({ required: true})
    superficie: number;
    @ApiProperty({ required: false})
    siren: string;
    @ApiProperty({ required: false})
    description: string;
}
