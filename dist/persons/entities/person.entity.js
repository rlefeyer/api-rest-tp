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
exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
let Person = class Person {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Id de la personne' }),
    __metadata("design:type", String)
], Person.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Le nom de la personne' }),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { description: "La date d'anniversaire de la personne" }),
    __metadata("design:type", Date)
], Person.prototype, "birthday", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Le genre de la personne' }),
    __metadata("design:type", String)
], Person.prototype, "gender", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Adresse de la personne' }),
    __metadata("design:type", String)
], Person.prototype, "adressId", void 0);
Person = __decorate([
    (0, graphql_1.ObjectType)()
], Person);
exports.Person = Person;
//# sourceMappingURL=person.entity.js.map