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
exports.UpdateAdressInput = void 0;
const create_adress_input_1 = require("./create-adress.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateAdressInput = class UpdateAdressInput extends (0, graphql_1.PartialType)(create_adress_input_1.CreateAdressInput) {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'ID de la personne' }),
    __metadata("design:type", String)
], UpdateAdressInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'La rue de la personne' }),
    __metadata("design:type", String)
], UpdateAdressInput.prototype, "street", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'La ville de la personne' }),
    __metadata("design:type", String)
], UpdateAdressInput.prototype, "city", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Le pays de la personne' }),
    __metadata("design:type", String)
], UpdateAdressInput.prototype, "country", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Le code postal de la personne' }),
    __metadata("design:type", Number)
], UpdateAdressInput.prototype, "zipcode", void 0);
UpdateAdressInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateAdressInput);
exports.UpdateAdressInput = UpdateAdressInput;
//# sourceMappingURL=update-adress.input.js.map