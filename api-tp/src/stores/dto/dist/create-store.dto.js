"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateStoreDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var CreateStoreDto = /** @class */ (function () {
    function CreateStoreDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ required: true, description: "Nom du store" })
    ], CreateStoreDto.prototype, "name");
    __decorate([
        swagger_1.ApiProperty({ required: true, description: "Adresse du store" })
    ], CreateStoreDto.prototype, "adress");
    __decorate([
        swagger_1.ApiProperty({ required: true, description: "Numéro de siret du store" })
    ], CreateStoreDto.prototype, "siret");
    __decorate([
        swagger_1.ApiProperty({ required: true, description: "Surperficie du store" })
    ], CreateStoreDto.prototype, "superficie");
    return CreateStoreDto;
}());
exports.CreateStoreDto = CreateStoreDto;
