import { ApiProperty } from '@nestjs/swagger';


export class CreateArticleDto {
    @ApiProperty({ required: true })
    name: string;

    @ApiProperty({ required: true })
    prix: number;

    @ApiProperty({ required: true })
    description: string;

    @ApiProperty({ required: false })
    storeId: string;
}
