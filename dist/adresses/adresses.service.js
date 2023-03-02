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
exports.AdressesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdressesService = class AdressesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createAdressInput) {
        return this.prisma.adress.create({ data: createAdressInput });
    }
    findAll() {
        return this.prisma.adress.findMany();
    }
    findOne(id) {
        return this.prisma.adress.findUniqueOrThrow({
            where: { id: id }
        });
    }
    update(id, updateAdressInput) {
        return this.prisma.adress.update({
            where: { id: id },
            data: {
                city: updateAdressInput.city,
                country: updateAdressInput.country,
                street: updateAdressInput.street,
                zipcode: updateAdressInput.zipcode,
            },
        });
    }
    remove(id) {
        return this.prisma.adress.delete({
            where: { id: id }
        });
    }
};
AdressesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdressesService);
exports.AdressesService = AdressesService;
//# sourceMappingURL=adresses.service.js.map