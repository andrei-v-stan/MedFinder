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
exports.MedicineController = void 0;
const common_1 = require("@nestjs/common");
const medicine_service_1 = require("./medicine.service");
const swagger_1 = require("@nestjs/swagger");
const medicineOptions_dto_1 = require("./DTO/medicineOptions.dto");
let MedicineController = class MedicineController {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    async findByFilter(options) {
        let optionsDto;
        try {
            optionsDto = options ? JSON.parse(options) : new medicineOptions_dto_1.MedicineOptionsDto();
        }
        catch (error) {
            console.error("Error parsing options:", error);
            optionsDto = new medicineOptions_dto_1.MedicineOptionsDto();
        }
        const findOptions = this.medicineService.resolveMedicineOptionDto(optionsDto);
        return this.medicineService.find(findOptions);
    }
    async findAll() {
        return this.medicineService.find();
    }
    async findOne(id) {
        return this.medicineService.findOne(+id);
    }
};
exports.MedicineController = MedicineController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all medicines from filter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all medicines from filter.' }),
    (0, swagger_1.ApiQuery)({ name: 'options', type: 'string', required: false }),
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "findByFilter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all medicines' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all medicines.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicineController.prototype, "findOne", null);
exports.MedicineController = MedicineController = __decorate([
    (0, swagger_1.ApiTags)('Medicines'),
    (0, common_1.Controller)('medicines'),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], MedicineController);
//# sourceMappingURL=medicine.controller.js.map