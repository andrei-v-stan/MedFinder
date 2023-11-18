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
exports.Medicine = void 0;
const typeorm_1 = require("typeorm");
const illness_entity_1 = require("../../Treatable/Entities/illness.entity");
const symptom_entity_1 = require("../../Treatable/Entities/symptom.entity");
const constants_1 = require("../../../Utils/constants");
let Medicine = class Medicine {
    constructor(name, description, manufacturer) {
        this.name = name;
        this.description = description;
        this.manufacturer = manufacturer;
    }
    addIllness(treatable) {
        this.illnessTreatment.push(treatable);
    }
    removeIllness(treatable) {
        var index = this.illnessTreatment.indexOf(treatable);
        if (index != -1)
            this.illnessTreatment.splice(index, 1);
    }
    addSymptom(treatable) {
        this.symptomTreatment.push(treatable);
    }
    removeSymptom(treatable) {
        var index = this.symptomTreatment.indexOf(treatable);
        if (index != -1)
            this.symptomTreatment.splice(index, 1);
    }
};
exports.Medicine = Medicine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medicine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medicine.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medicine.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medicine.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => illness_entity_1.Illness, illness => illness.medicines),
    (0, typeorm_1.JoinTable)({
        name: constants_1.TABLE_NAMES.MEDICINE_ILLNESS,
        joinColumn: { name: 'illnessId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'medicineId', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Medicine.prototype, "illnessTreatment", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => symptom_entity_1.Symptom, symptom => symptom.medicines),
    (0, typeorm_1.JoinTable)({
        name: constants_1.TABLE_NAMES.MEDICINE_SYMPTOM,
        joinColumn: { name: 'symptomId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'medicineId', referencedColumnName: 'id' }
    }),
    __metadata("design:type", Array)
], Medicine.prototype, "symptomTreatment", void 0);
exports.Medicine = Medicine = __decorate([
    (0, typeorm_1.Entity)({ name: constants_1.TABLE_NAMES.MEDICINES }),
    __metadata("design:paramtypes", [String, String, String])
], Medicine);
//# sourceMappingURL=medicine.entity.js.map