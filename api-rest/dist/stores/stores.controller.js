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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresControllerV1 = void 0;
const common_1 = require("@nestjs/common");
const stores_service_1 = require("./stores.service");
const create_store_dto_1 = require("./dto/create-store.dto");
const update_store_dto_1 = require("./dto/update-store.dto");
const store_entity_1 = require("./entities/store.entity");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const passport_1 = require("@nestjs/passport");
let StoresControllerV1 = class StoresControllerV1 {
    constructor(storesService) {
        this.storesService = storesService;
    }
    convertToEntityV1(obj) {
        const store = new store_entity_1.Store();
        store.nom = obj.nom;
        store.superficie = obj.superficie;
        store.ville = obj.ville;
        store.siren = obj.siren;
        return store;
    }
    updateToEntityV1(obj) {
        const store = new store_entity_1.Store();
        store.nom = obj.nom;
        store.superficie = obj.superficie;
        store.ville = obj.ville;
        store.siren = obj.siren;
        return store;
    }
    create(createStoreDto) {
        return this.storesService.create(this.convertToEntityV1(createStoreDto));
    }
    findAll() {
        return this.storesService.findAll();
    }
    findOne(id) {
        return this.storesService.findOne(id);
    }
    update(id, updateStoreDto) {
        return this.storesService.update(id, this.updateToEntityV1(updateStoreDto));
    }
    remove(id) {
        return this.storesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Ajout du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.CreateStoreDtoV1]),
    __metadata("design:returntype", void 0)
], StoresControllerV1.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Retour des stores avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoresControllerV1.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Retour du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresControllerV1.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Mis à jour partielle du store avec succès.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_store_dto_1.UpdateStoreDtoV1]),
    __metadata("design:returntype", void 0)
], StoresControllerV1.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Suppression du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresControllerV1.prototype, "remove", null);
StoresControllerV1 = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, throttler_1.Throttle)(10, 60),
    (0, common_1.Controller)('v1/stores'),
    __metadata("design:paramtypes", [stores_service_1.StoresService])
], StoresControllerV1);
exports.StoresControllerV1 = StoresControllerV1;
//# sourceMappingURL=stores.controller.js.map