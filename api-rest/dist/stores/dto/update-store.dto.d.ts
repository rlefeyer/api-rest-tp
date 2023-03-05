import { CreateStoreDtoV1 } from './create-store.dto';
declare const UpdateStoreDtoV1_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStoreDtoV1>>;
export declare class UpdateStoreDtoV1 extends UpdateStoreDtoV1_base {
    nom: string;
    superficie: number;
    ville: string;
    siren: number;
}
export {};
