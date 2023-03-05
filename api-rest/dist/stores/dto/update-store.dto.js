"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreDtoV1 = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_store_dto_1 = require("./create-store.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateStoreDtoV1 extends (0, mapped_types_1.PartialType)(create_store_dto_1.CreateStoreDtoV1) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Le nom de votre boutique' }),
    __metadata("design:type", String)
], UpdateStoreDtoV1.prototype, "nom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'La superficie en m2' }),
    __metadata("design:type", Number)
], UpdateStoreDtoV1.prototype, "superficie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'La ville où est située la boutique',
    }),
    __metadata("design:type", String)
], UpdateStoreDtoV1.prototype, "ville", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'le numéro de SIREN de votre boutique (facultatif)',
    }),
    __metadata("design:type", Number)
], UpdateStoreDtoV1.prototype, "siren", void 0);
exports.UpdateStoreDtoV1 = UpdateStoreDtoV1;
//# sourceMappingURL=update-store.dto.js.map