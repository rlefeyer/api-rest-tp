"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.StoresController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var StoresController = /** @class */ (function () {
    function StoresController(storesService) {
        this.storesService = storesService;
    }
    StoresController.prototype.create = function (createStoreDto) {
        return this.storesService.create(createStoreDto);
    };
    StoresController.prototype.findAll = function () {
        return this.storesService.findAll();
    };
    StoresController.prototype.findOne = function (id) {
        return this.storesService.findOne(+id);
    };
    StoresController.prototype.update = function (id, updateStoreDto) {
        return this.storesService.update(+id, updateStoreDto);
    };
    StoresController.prototype.remove = function (id) {
        return this.storesService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        swagger_1.ApiCreatedResponse({ description: "L'enregistrement a été créé avec succès." }),
        swagger_1.ApiForbiddenResponse({ description: "Forbidden." }),
        __param(0, common_1.Body())
    ], StoresController.prototype, "create");
    __decorate([
        common_1.Get(),
        swagger_1.ApiResponse({ status: 200, description: 'La liste des stores est bien retournés' }),
        swagger_1.ApiResponse({ status: 403, description: "Vous n'aviez pas les autorisations nécessaires pour accéder à la ressource demandée." })
    ], StoresController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiResponse({ status: 200, description: 'Le store à bien été retourné' }),
        __param(0, common_1.Param('id'))
    ], StoresController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        swagger_1.ApiResponse({ status: 200, description: 'Le store à été modifié partiellement' }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], StoresController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiResponse({ status: 200, description: 'Le store à été supprimé' }),
        __param(0, common_1.Param('id'))
    ], StoresController.prototype, "remove");
    StoresController = __decorate([
        common_1.Controller('stores')
    ], StoresController);
    return StoresController;
}());
exports.StoresController = StoresController;
