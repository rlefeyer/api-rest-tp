import { Store } from './entities/store.entity';
import { PrismaService } from '../prisma/prisma.service';
export declare class StoresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(entity: Store): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    findAll(): import("@prisma/client").PrismaPromise<import("@prisma/client").Store[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    update(id: string, entity: Store): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__StoreClient<import("@prisma/client").Store, never>;
}
