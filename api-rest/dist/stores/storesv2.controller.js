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
exports.StoresControllerV2 = void 0;
const common_1 = require("@nestjs/common");
const stores_service_1 = require("./stores.service");
const create_storev2_dto_1 = require("./dto/create-storev2.dto");
const update_storev2_dto_1 = require("./dto/update-storev2.dto");
const store_entity_1 = require("./entities/store.entity");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const passport_1 = require("@nestjs/passport");
let StoresControllerV2 = class StoresControllerV2 {
    constructor(storesService) {
        this.storesService = storesService;
    }
    convertToEntityV2(obj) {
        const store = new store_entity_1.Store();
        store.nom = obj.nom;
        store.superficie = obj.superficie;
        store.ville = obj.ville;
        store.employe = obj.employe;
        return store;
    }
    updateToEntityV2(obj) {
        const store = new store_entity_1.Store();
        store.nom = obj.nom;
        store.superficie = obj.superficie;
        store.ville = obj.ville;
        store.employe = obj.employe;
        return store;
    }
    create(createStoreDto) {
        return this.storesService.create(this.convertToEntityV2(createStoreDto));
    }
    findAll() {
        return this.storesService.findAll();
    }
    findOne(id) {
        return this.storesService.findOne(id);
    }
    update(id, updateStoreDto) {
        return this.storesService.update(id, this.updateToEntityV2(updateStoreDto));
    }
    remove(id) {
        return this.storesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Ajout du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    (0, throttler_1.Throttle)(10, 60),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_storev2_dto_1.CreateStoreDtoV2]),
    __metadata("design:returntype", void 0)
], StoresControllerV2.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Retour des stores avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoresControllerV2.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Retour du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresControllerV2.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Mis à jour partielle du store avec succès.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_storev2_dto_1.UpdateStoreDtoV2]),
    __metadata("design:returntype", void 0)
], StoresControllerV2.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Suppression du store avec succès.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Accès refusé.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresControllerV2.prototype, "remove", null);
StoresControllerV2 = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, throttler_1.Throttle)(10, 60),
    (0, common_1.Controller)('v2/stores'),
    __metadata("design:paramtypes", [stores_service_1.StoresService])
], StoresControllerV2);
exports.StoresControllerV2 = StoresControllerV2;
//# sourceMappingURL=storesv2.controller.js.map