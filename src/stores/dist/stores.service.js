"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StoresService = void 0;
var common_1 = require("@nestjs/common");
var StoresService = /** @class */ (function () {
    function StoresService() {
    }
    StoresService.prototype.create = function (createStoreDto) {
        return 'This action adds a new store';
    };
    StoresService.prototype.findAll = function () {
        return "This action returns all stores";
    };
    StoresService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " store";
    };
    StoresService.prototype.update = function (id, updateStoreDto) {
        return "This action updates a #" + id + " store";
    };
    StoresService.prototype.remove = function (id) {
        return "This action removes a #" + id + " store";
    };
    StoresService = __decorate([
        common_1.Injectable()
    ], StoresService);
    return StoresService;
}());
exports.StoresService = StoresService;
