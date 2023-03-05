import { StoresService } from './stores.service';
import { CreateStoreDtoV1 } from './dto/create-store.dto';
import { UpdateStoreDtoV1 } from './dto/update-store.dto';
export declare class StoresControllerV1 {
    private readonly storesService;
    constructor(storesService: StoresService);
    private convertToEntityV1;
    private updateToEntityV1;
    create(createStoreDto: CreateStoreDtoV1): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    findAll(): import("@prisma/client").PrismaPromise<import("@prisma/client").Store[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    update(id: string, updateStoreDto: UpdateStoreDtoV1): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
}
