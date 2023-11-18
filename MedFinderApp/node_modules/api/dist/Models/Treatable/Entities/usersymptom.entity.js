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
exports.UserSymptom = void 0;
const constants_1 = require("../../../Utils/constants");
const typeorm_1 = require("typeorm");
const entityinfo_entity_1 = require("./entityinfo.entity");
const symptom_entity_1 = require("./symptom.entity");
let UserSymptom = class UserSymptom {
    constructor(name, description, duration, intensity) {
        this.info = new entityinfo_entity_1.EntityInfo(name, description);
        this.intensity = intensity;
        this.duration = duration;
    }
};
exports.UserSymptom = UserSymptom;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserSymptom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserSymptom.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserSymptom.prototype, "intensity", void 0);
__decorate([
    (0, typeorm_1.Column)(() => entityinfo_entity_1.EntityInfo),
    __metadata("design:type", entityinfo_entity_1.EntityInfo)
], UserSymptom.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => symptom_entity_1.Symptom, symptom => symptom.id),
    __metadata("design:type", symptom_entity_1.Symptom)
], UserSymptom.prototype, "baseSymptom", void 0);
exports.UserSymptom = UserSymptom = __decorate([
    (0, typeorm_1.Entity)({ name: constants_1.TABLE_NAMES.USER_SYMPTOMS }),
    __metadata("design:paramtypes", [String, String, Number, Number])
], UserSymptom);
//# sourceMappingURL=usersymptom.entity.js.map