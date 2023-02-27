"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Store = void 0;
var typeorm_1 = require("typeorm");
var Store = /** @class */ (function () {
    function Store() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Store.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Store.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Store.prototype, "address");
    __decorate([
        typeorm_1.Column()
    ], Store.prototype, "siret");
    __decorate([
        typeorm_1.Column()
    ], Store.prototype, "superficie");
    Store = __decorate([
        typeorm_1.Entity()
    ], Store);
    return Store;
}());
exports.Store = Store;
