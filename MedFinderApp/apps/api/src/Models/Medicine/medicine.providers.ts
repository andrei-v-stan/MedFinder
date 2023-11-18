import { DataSource } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
import { REPO_NAMES } from "src/Utils/constants";

export const MedicineProvider = [
    {
        provide: REPO_NAMES.MEDICINE,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Medicine),
        inject: [REPO_NAMES.DATASOURCE]
    }
]