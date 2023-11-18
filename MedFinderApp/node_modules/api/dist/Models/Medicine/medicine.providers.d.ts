import { DataSource } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
export declare const MedicineProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Medicine>;
    inject: string[];
}[];
