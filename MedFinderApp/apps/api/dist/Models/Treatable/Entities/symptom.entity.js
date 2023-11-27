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
exports.Symptom = void 0;
const typeorm_1 = require("typeorm");
const entityinfo_entity_1 = require("./entityinfo.entity");
const medicine_entity_1 = require("../../Medicine/Entities/medicine.entity");
const constants_1 = require("../../../Utils/constants");
let Symptom = class Symptom {
    constructor(name, description, type) {
        this.info = new entityinfo_entity_1.EntityInfo(name, description);
        this.type = type;
    }
};
exports.Symptom = Symptom;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Symptom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Symptom.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(() => entityinfo_entity_1.EntityInfo),
    __metadata("design:type", entityinfo_entity_1.EntityInfo)
], Symptom.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => medicine_entity_1.Medicine, medicine => medicine.symptoms, { cascade: true }),
    __metadata("design:type", Array)
], Symptom.prototype, "medicines", void 0);
exports.Symptom = Symptom = __decorate([
    (0, typeorm_1.Entity)({ name: constants_1.TABLE_NAMES.SYMPTOMS }),
    __metadata("design:paramtypes", [String, String, String])
], Symptom);
//# sourceMappingURL=symptom.entity.js.map