import { Repository } from "typeorm";
import { Medicine } from "./Entities/medicine.entity";
export declare class MedicineService {
    private medicineRepo;
    constructor(medicineRepo: Repository<Medicine>);
    findAll(): Promise<Medicine[]>;
    findOne(id: number): Promise<Medicine>;
}
