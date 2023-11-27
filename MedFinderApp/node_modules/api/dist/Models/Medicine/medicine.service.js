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
exports.MedicineService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const constants_1 = require("../../Utils/constants");
let MedicineService = class MedicineService {
    constructor(medicineRepo) {
        this.medicineRepo = medicineRepo;
    }
    async findOne(id) {
        return this.medicineRepo.findOneBy({ id });
    }
    async find(options) {
        return this.medicineRepo.find(options);
    }
    resolveMedicineOptionDto(optionsDto) {
        return {
            where: optionsDto.where || {},
            order: optionsDto.order ? this.parseOrderOptions(optionsDto.order) : {},
            select: optionsDto.select || [],
            relations: optionsDto.relations ? Object.keys(optionsDto.relations) : [],
        };
    }
    parseOrderOptions(order) {
        if (Array.isArray(order)) {
            return order.reduce((acc, criterion) => {
                const [column, direction] = criterion.split(':');
                acc[column] = direction.toUpperCase();
                return acc;
            }, {});
        }
        return order;
    }
};
exports.MedicineService = MedicineService;
exports.MedicineService = MedicineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.REPO_NAMES.MEDICINE)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MedicineService);
//# sourceMappingURL=medicine.service.js.map