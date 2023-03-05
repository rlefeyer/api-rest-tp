import { CreateArticleDto } from './create-article.dto';
declare const UpdateArticleDto_base: import("@nestjs/common").Type<Partial<CreateArticleDto>>;
export declare class UpdateArticleDto extends UpdateArticleDto_base {
    nom: string;
    quantite: number;
    prix: number;
}
export {};
