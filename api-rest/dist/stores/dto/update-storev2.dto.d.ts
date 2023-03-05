import { CreateStoreDtoV2 } from './create-storev2.dto';
declare const UpdateStoreDtoV2_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStoreDtoV2>>;
export declare class UpdateStoreDtoV2 extends UpdateStoreDtoV2_base {
    nom: string;
    superficie: number;
    ville: string;
    employe: string;
}
export {};
