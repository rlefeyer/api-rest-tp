import { StoresService } from './stores.service';
import { CreateStoreDtoV2 } from './dto/create-storev2.dto';
import { UpdateStoreDtoV2 } from './dto/update-storev2.dto';
export declare class StoresControllerV2 {
    private readonly storesService;
    constructor(storesService: StoresService);
    private convertToEntityV2;
    private updateToEntityV2;
    create(createStoreDto: CreateStoreDtoV2): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    findAll(): import("@prisma/client").PrismaPromise<import("@prisma/client").Store[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    update(id: string, updateStoreDto: UpdateStoreDtoV2): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
}
