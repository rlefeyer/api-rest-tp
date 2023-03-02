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
exports.AdressesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const adresses_service_1 = require("./adresses.service");
const adress_entity_1 = require("./entities/adress.entity");
const create_adress_input_1 = require("./dto/create-adress.input");
const update_adress_input_1 = require("./dto/update-adress.input");
let AdressesResolver = class AdressesResolver {
    constructor(adressesService) {
        this.adressesService = adressesService;
    }
    createAdress(createAdressInput) {
        return this.adressesService.create(createAdressInput);
    }
    findAll() {
        return this.adressesService.findAll();
    }
    findOne(id) {
        return this.adressesService.findOne(id);
    }
    updateAdress(updateAdressInput) {
        return this.adressesService.update(updateAdressInput.id, updateAdressInput);
    }
    removeAdress(id) {
        return this.adressesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => adress_entity_1.Adress),
    __param(0, (0, graphql_1.Args)('createAdressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adress_input_1.CreateAdressInput]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "createAdress", null);
__decorate([
    (0, graphql_1.Query)(() => [adress_entity_1.Adress], { name: 'adresses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => adress_entity_1.Adress, { name: 'adress' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => adress_entity_1.Adress),
    __param(0, (0, graphql_1.Args)('updateAdressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_adress_input_1.UpdateAdressInput]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "updateAdress", null);
__decorate([
    (0, graphql_1.Mutation)(() => adress_entity_1.Adress),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdressesResolver.prototype, "removeAdress", null);
AdressesResolver = __decorate([
    (0, graphql_1.Resolver)(() => adress_entity_1.Adress),
    __metadata("design:paramtypes", [adresses_service_1.AdressesService])
], AdressesResolver);
exports.AdressesResolver = AdressesResolver;
//# sourceMappingURL=adresses.resolver.js.map