import { CreateAdressInput } from './create-adress.input';
declare const UpdateAdressInput_base: import("@nestjs/common").Type<Partial<CreateAdressInput>>;
export declare class UpdateAdressInput extends UpdateAdressInput_base {
    id: string;
    street: string;
    city: string;
    country: string;
    zipcode: number;
}
export {};
