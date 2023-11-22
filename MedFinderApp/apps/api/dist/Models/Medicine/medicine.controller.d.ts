import { MedicineService } from "./medicine.service";
import { Medicine } from "./Entities/medicine.entity";
export declare class MedicineController {
    private readonly medicineService;
    constructor(medicineService: MedicineService);
    findByFilter(options?: string): Promise<Medicine[]>;
    findAll(): Promise<Medicine[]>;
    findOne(id: string): Promise<Medicine>;
}
