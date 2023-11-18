"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicineProvider = void 0;
const medicine_entity_1 = require("./Entities/medicine.entity");
const constants_1 = require("../../Utils/constants");
exports.MedicineProvider = [
    {
        provide: constants_1.REPO_NAMES.MEDICINE,
        useFactory: (dataSource) => dataSource.getRepository(medicine_entity_1.Medicine),
        inject: [constants_1.REPO_NAMES.DATASOURCE]
    }
];
//# sourceMappingURL=medicine.providers.js.map