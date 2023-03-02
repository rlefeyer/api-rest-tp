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
exports.Adress = void 0;
const graphql_1 = require("@nestjs/graphql");
let Adress = class Adress {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id de adresse de la personne' }),
    __metadata("design:type", String)
], Adress.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'La rue de la personne' }),
    __metadata("design:type", String)
], Adress.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'La ville de la personne' }),
    __metadata("design:type", String)
], Adress.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Le pays de la personne' }),
    __metadata("design:type", String)
], Adress.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Le code postal de la personne' }),
    __metadata("design:type", Number)
], Adress.prototype, "zipcode", void 0);
Adress = __decorate([
    (0, graphql_1.ObjectType)()
], Adress);
exports.Adress = Adress;
//# sourceMappingURL=adress.entity.js.map