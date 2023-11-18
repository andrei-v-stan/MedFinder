import { MedicineService } from "./medicine.service";
export declare class MedicineController {
    private readonly medicineService;
    constructor(medicineService: MedicineService);
    findAll(): Promise<import("./Entities/medicine.entity").Medicine[]>;
    findOne(id: string): Promise<import("./Entities/medicine.entity").Medicine>;
}
