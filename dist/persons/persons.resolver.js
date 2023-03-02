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
exports.PersonsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const persons_service_1 = require("./persons.service");
const person_entity_1 = require("./entities/person.entity");
const create_person_input_1 = require("./dto/create-person.input");
const update_person_input_1 = require("./dto/update-person.input");
let PersonsResolver = class PersonsResolver {
    constructor(personsService) {
        this.personsService = personsService;
    }
    createPerson(createPersonInput) {
        return this.personsService.create(createPersonInput);
    }
    findAll() {
        return this.personsService.findAll();
    }
    findOne(id) {
        return this.personsService.findOne(id);
    }
    updatePerson(updatePersonInput) {
        return this.personsService.update(updatePersonInput.id, updatePersonInput);
    }
    removePerson(id) {
        return this.personsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('createPersonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_input_1.CreatePersonInput]),
    __metadata("design:returntype", void 0)
], PersonsResolver.prototype, "createPerson", null);
__decorate([
    (0, graphql_1.Query)(() => [person_entity_1.Person], { name: 'persons' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => person_entity_1.Person, { name: 'person' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('updatePersonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_person_input_1.UpdatePersonInput]),
    __metadata("design:returntype", void 0)
], PersonsResolver.prototype, "updatePerson", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_entity_1.Person),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonsResolver.prototype, "removePerson", null);
PersonsResolver = __decorate([
    (0, graphql_1.Resolver)(() => person_entity_1.Person),
    __metadata("design:paramtypes", [persons_service_1.PersonsService])
], PersonsResolver);
exports.PersonsResolver = PersonsResolver;
//# sourceMappingURL=persons.resolver.js.map